import { GetStaticProps } from 'next';

import GitHubLogo from '../public/github.svg';
import LinkedInLogo from '../public/linkedin.svg';
import StackOverflowLogo from '../public/so.svg';

interface AccountURLs {
  github: string;
  linkedIn: string;
  stackOverflow: string;
}

interface AccountProps {
  urls: AccountURLs;
}

export default function Accounts({
  urls: { github, linkedIn, stackOverflow },
}: AccountProps) {
  return (
    <div className="accounts">
      <a href={github}>
        <GitHubLogo />
      </a>
      <a href={linkedIn}>
        <LinkedInLogo />
      </a>
      <a href={stackOverflow}>
        <StackOverflowLogo />
      </a>
      <style jsx>{`
        .accounts {
          height: 25px;
        }

        a {
          margin-right: 10px;
        }

        a:last-child {
          margin-right: 0;
        }
      `}</style>
      <style jsx global>{`
        .accounts a svg {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
