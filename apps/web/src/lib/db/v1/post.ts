import fs from 'fs/promises'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  category?: string
  banner: string
  alt?: string
  image?: string
}

export const getBlogPosts = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/contents/posts')
  
  // Use Promise.all to read files concurrently
  const fileNames = await fs.readdir(postsDirectory)
  const mdxFiles = fileNames.filter(file => 
    file.endsWith('.mdx') || file.endsWith('.md')
  )

  const posts = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContent = await fs.readFile(filePath, 'utf-8')
      
      // Parse frontmatter
      const { metadata, content } = parseFrontmatter(fileContent)
      const slug = path.basename(fileName, path.extname(fileName))
      
      return {
        metadata: metadata as Metadata,
        slug,
        tweetIds: extractTweetIds(content),
        content
      }
    })
  )

  // Sort posts by date once, not on every request
  return posts.sort((a, b) => 
    new Date(b.metadata.publishedAt).getTime() - 
    new Date(a.metadata.publishedAt).getTime()
  )
}

// Helper functions remain the same but use RegExp.exec() for better performance
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  
  if (!match) {
    throw new Error('Invalid frontmatter')
  }

  const frontMatterBlock = match[1]
  const content = fileContent.slice(match[0].length).trim()
  const metadata: Partial<Metadata> = {}

  // Use a single regex to parse key-value pairs
  const kvRegex = /^(\w+):\s*(?:"([^"]*)"|'([^']*)'|(.*))$/
  
  frontMatterBlock.trim().split('\n').forEach((line) => {
    const match = kvRegex.exec(line.trim())
    if (match) {
      const [, key, doubleQuoted, singleQuoted, unquoted] = match
      metadata[key as keyof Metadata] = doubleQuoted || singleQuoted || unquoted
    }
  })

  return { metadata: metadata as Metadata, content }
}

function extractTweetIds(content: string) {
  const tweetRegex = /<StaticTweet\sid="(\d+)"\s*\/>/g
  const tweetIds: string[] = []
  let match

  while ((match = tweetRegex.exec(content)) !== null) {
    tweetIds.push(match[1])
  }

  return tweetIds
}

