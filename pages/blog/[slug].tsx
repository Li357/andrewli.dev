import Head from 'next/head';
import glob from 'glob';
import matter from 'gray-matter';
import { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import renderMathInElement from 'katex/dist/contrib/auto-render';

import Layout from '../../components/layout';
import { PostData } from '../../utils/types';
import { getBlogPathFromFile, formatDate } from '../../utils/utils';
import { useRef, useEffect } from 'react';

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
  const postContainer = useRef(null);

  useEffect(() => {
    if (data.math && postContainer.current) {
      renderMathInElement(postContainer.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
        ],
        macros: {
          '\\qed': '\\blacksquare',
        },
      });
      postContainer.current.style.display = 'flex';
    }
  }, [postContainer]);

  return (
    <Layout title={data.title} description="TODO">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
          integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <h3>{formatDate(data.date)}</h3>
        <h1>{data.title}</h1>
        <div className="body" ref={postContainer}>
          <ReactMarkdown source={content} />
        </div>
      </main>
      <style jsx>{`
        .body {
          display: none;
          font-family: 'Source Sans Pro';
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}
