import fs from 'fs';
import path from 'path';
import { parseFrontmatter } from './parse-frontmatter';

export function readMDXFile(filePath: string) {
  if (!filePath || !fs.existsSync(filePath) || (path.extname(filePath) !== '.mdx' && path.extname(filePath) !== '.md')) {
    throw new Error('Invalid file path or file does not exist');
  }
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}
