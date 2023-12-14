import { allPosts } from 'contentlayer/generated';

import { PostCard } from '@/components/PostCard';

export default function Home() {
  const posts = allPosts;

  return (
    <main className="">
      {posts.map((post) => (
        <PostCard key={post._id} />
      ))}
    </main>
  );
}
