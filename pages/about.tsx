import { InferGetStaticPropsType } from 'next';

import Layout from '../components/layout';
import Accounts from '../components/accounts';

export async function getStaticProps() {
  const { urls } = await import('../data/config.json');
  return {
    props: { urls },
  };
}

export default function About({
  urls,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="About"
      description="I'm Andrew Li, a higher school programmer and saxophonist from Omaha, Nebraska.">
      <main>
        <img alt="Portrait" src="/profile.jpg" width="700" height="450" />
        <div>
          <p>
            I'm <b>Andrew Li</b>, high school senior from Omaha, Nebraska. I'm
            currently at the University of Nebraska Omaha doing{' '}
            <b>research in mathematics</b> into nonlinear Diophantine equations
            in algebraic number fields, and previously an <b>intern</b> at UNO's
            Cybersecurity Lab developing web apps to combat phishing.
          </p>
          <p>
            I ❤️ web and <a href="https://github.com/Li357/WHS">mobile app</a>{' '}
            development and building things for fun. On the art side, I'm an
            award-winning jazz and classical musician on the alto sax.
          </p>
          <Accounts urls={urls} />
        </div>
      </main>
      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 5px;
          margin: 0 0 20px;
        }
      `}</style>
    </Layout>
  );
}
