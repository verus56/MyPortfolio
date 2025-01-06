import path from 'path';

import { getMDXFiles } from './get-mdx-files';
import { readMDXFile } from './read-mdx-files';
import { extractTweetIds } from './extract-tweet-ids';

export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}
