import matter from 'gray-matter';
import { glob } from 'glob';

import Layout from '../components/layout';
import PostCard from '../components/postCard';
import { InferGetStaticPropsType } from 'next';
import { PostData } from '../utils/types';
import { getBlogPathFromFile, getPathWithoutPrefix } from '../utils/utils';

export const getStaticProps = async () => {
  const postPaths = glob.sync('posts/**/*.md');
  const posts = await Promise.all(
    postPaths.map(async (path) => {
      // since a static path prefix is needed for dynamic import
      const { default: raw } = await import(
        `../posts/${getPathWithoutPrefix(path)}`
      );
      const post = matter(raw);
      return { data: post.data as PostData, path: getBlogPathFromFile(path) };
    })
  );
  return {
    props: {
      posts,
    },
  };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" description="TODO">
      <main>
        {posts.map((post) => (
          <PostCard key={post.data.title} {...post} />
        ))}
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
