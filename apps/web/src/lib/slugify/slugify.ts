import { SlugifyOptions, CharMap } from './types';
import { charMap, locales } from './data';

function slugify(string: string, options?: SlugifyOptions | string): string {
  if (typeof string !== 'string') {
    throw new Error('slugify: string argument expected');
  }

  const opts: SlugifyOptions = typeof options === 'string'
    ? { replacement: options }
    : options || {};

  const locale = locales[opts.locale || ''] || {};
  const replacement = opts.replacement === undefined ? '-' : opts.replacement;
  const trim = opts.trim === undefined ? true : opts.trim;

  let slug = Array.from(string.normalize())
    .reduce((result, ch) => {
      let appendChar = locale[ch];
      if (appendChar === undefined) appendChar = charMap[ch];
      if (appendChar === undefined) appendChar = ch;
      if (appendChar === replacement) appendChar = ' ';
      
      return result + appendChar;
    }, '')
    .replace(opts.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '');

  if (opts.strict) {
    slug = slug.replace(/[^A-Za-z0-9\s]/g, '');
  }

  if (trim) {
    slug = slug.trim();
  }

  // Replace spaces with replacement character, treating multiple consecutive
  // spaces as a single space.
  slug = slug.replace(/\s+/g, replacement);

  if (opts.lower) {
    slug = slug.toLowerCase();
  }

  return slug;
}

namespace slugify {
  export function extend(customMap: CharMap): void {
    Object.assign(charMap, customMap);
  }
}

export default slugify;

