import { allPosts } from 'contentlayer/generated';

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>DJA NEXT TEMPLATE</h2>
      <div dangerouslySetInnerHTML={{ __html: posts[0].title }} />
    </main>
  );
}
