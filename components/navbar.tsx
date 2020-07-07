import Link from 'next/link';

import Logo from '../public/logo.svg';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/">
        <a className="home">
          <Logo />
        </a>
      </Link>
      <div className="links">
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </div>
      <style jsx>{`
        .navbar {
          height: 50px;
          margin: 50px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .home {
          height: 100%;
        }

        .links a {
          padding: 20px;
          color: gray;
          font-size: 1.2em;
        }

        .links a:last-child {
          padding-right: 0;
        }

        .links a:hover {
          color: black;
        }
      `}</style>
      <style jsx global>{`
        .home svg {
          border-radius: 5px;
          height: 100%;
          fill: gray;
        }

        .home:hover path {
          fill: black;
        }
      `}</style>
    </header>
  );
}
