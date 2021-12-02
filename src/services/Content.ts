import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export type PostItems = {
  [key: string]: string
}

export function getPostFileNames() {
  return fs.readdirSync(postsDirectory)
}

export function getPostByName(name: string) {
  const fullPath = join(postsDirectory, name)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: PostItems = { ...data }
  items['name'] = name
  items['path'] = fullPath
  items['content'] = content

  return items
}
export function getPostBySlug(slug: string) {
  const names = getPostFileNames()
  const name = names.find(name => new RegExp(`\\d{3,}-${slug}.md`, 'gi').test(name))

  return name ? getPostByName(name) : null
}

export function getAllPosts() {
  const names = getPostFileNames()

  const posts = names
    .map(name => getPostByName(name))
    // filter posts with createdAt date in future
    .filter(post => post['createdAt'] <= new Date().toISOString())
    // sort posts by date in descending order
    .sort((post1, post2) => (post1['createdAt'] > post2['createdAt'] ? -1 : 1))

  return posts
}
