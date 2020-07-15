import Layout from '../components/layout';
import PostCard from '../components/postCard';
import { InferGetStaticPropsType } from 'next';
import getPosts from '../utils/get-posts';

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" description="TODO">
      <main>
        <h1>Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
      `}</style>
    </Layout>
  );
}
