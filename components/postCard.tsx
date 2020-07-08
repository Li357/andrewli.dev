import Link from 'next/link';

import { PostData } from '../utils/types';

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
    </div>
  );
}
