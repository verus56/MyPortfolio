export interface SlugifyOptions {
  replacement?: string;
  remove?: RegExp;
  lower?: boolean;
  strict?: boolean;
  locale?: string;
  trim?: boolean;
}

export interface CharMap {
  [key: string]: string;
}

export interface LocaleMap {
  [key: string]: CharMap;
}

