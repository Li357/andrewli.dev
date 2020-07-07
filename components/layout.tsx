import Head from 'next/head';
import { ReactNode } from 'react';

import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>
          Andrew Li
          {title ? ` | ${title}` : ''}
        </title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      {children}
      <Footer />
      <style jsx>{`
        .container {
          margin: 0 30%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          height: 100%;
        }
      `}</style>
      <style jsx global>{`
        html {
          overflow: hidden scroll;
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          height: 100%;
          font-weight: 700;
        }

        a {
          text-decoration: none;
        }

        a,
        a:visited {
          color: #38c7c5;
        }

        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.8rem;
        }

        * {
          box-sizing: border-box;
        }

        #__next {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
