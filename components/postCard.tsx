import Link from 'next/link';

import { PostData } from '../utils/types';
import { formatDate } from '../utils/utils';

interface PostCardProps {
  data: PostData;
  path: string;
}

export default function PostCard({ data, path }: PostCardProps) {
  return (
    <div className="post-card">
      <Link href={path}>
        <a>{data.title}</a>
      </Link>
      <span>{formatDate(data.date)}</span>
      <style jsx>{`
        .post-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 20px;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
}
