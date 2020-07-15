import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import matter from 'gray-matter';
import { Post } from './types';

export default function getPosts(): Post[] {
  const postDir = fs.readdirSync('./posts/');
  const posts = postDir
    .filter((file) => path.extname(file) === '.md')
    .map((file) => {
      const raw = fs.readFileSync(`./posts/${file}`, 'utf8');
      const parsed = matter(raw);
      const data = parsed.data as Omit<Post, 'content'>;
      return {
        ...data,
        content: parsed.content,
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return posts;
}
