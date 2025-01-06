import path from 'path';
import { getMDXData } from '@/lib/db/v0/utils/get-mdx-data';

export async function getPortfolioPosts() {
  return getMDXData(path.join(process.cwd(), 'src/contents/portfolios'));
}
