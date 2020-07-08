import glob from 'glob';
import matter from 'gray-matter';
import { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';

import Layout from '../../components/layout';
import { PostData } from '../../utils/types';
import { getBlogPathFromFile } from '../../utils/utils';

export const getStaticPaths = async () => {
  const postPaths = glob.sync('posts/**/*.md');
  const paths = postPaths.map((path) => getBlogPathFromFile(path));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { default: raw } = await import(`../../posts/${slug}.md`);
  const post = matter(raw);
  return {
    props: {
      data: post.data as PostData,
      content: post.content,
    },
  };
};

export default function BlogPost({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={data.title} description="TODO">
      <h1>{data.title}</h1>
      <ReactMarkdown source={content} />
    </Layout>
  );
}
