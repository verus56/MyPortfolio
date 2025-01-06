import path from 'path';
import { getMDXData } from '@/lib/db/v0/utils/get-mdx-data';

export async function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src/contents/posts'));
}
