import Link from 'next/link';

import { Post } from '../utils/types';
import { formatDate } from '../utils/utils';

export default function PostCard({ title, slug, date }: Post) {
  return (
    <div className="post-card">
      <Link href={`/blog/${slug}`}>
        <a>{title}</a>
      </Link>
      <span>{formatDate(date)}</span>
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
