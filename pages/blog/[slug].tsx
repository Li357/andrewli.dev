import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import renderMathInElement from 'katex/dist/contrib/auto-render';

import Layout from '../../components/layout';
import { formatDate } from '../../utils/utils';
import getPosts from '../../utils/get-posts';

export const getStaticPaths = async () => {
  return {
    paths: getPosts().map((post) => `/blog/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: getPosts().find((post) => post.slug === params.slug),
  };
};

export default function BlogPost({
  title,
  date,
  content,
  math,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postContainer = useRef(null);

  useEffect(() => {
    if (postContainer.current) {
      if (math) {
        renderMathInElement(postContainer.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
          ],
          macros: {
            '\\qed': '\\blacksquare',
          },
        });
      }
      postContainer.current.style.display = 'flex';
    }
  }, [postContainer]);

  return (
    <Layout title={title} description="TODO">
      <Head>
        {math && (
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css"
            integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq"
            crossOrigin="anonymous"
          />
        )}
      </Head>
      <main>
        <h3>{formatDate(date)}</h3>
        <h1>{title}</h1>
        <div className="body" ref={postContainer}>
          <ReactMarkdown source={`${content} ■`} />
        </div>
      </main>
      <style jsx>{`
        .body {
          display: none;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}
