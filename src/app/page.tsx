import { allPosts } from 'contentlayer/generated';

import tw from 'tailwind-styled-components';

import { Mdx } from '@/components/Mdx';

const Button = tw.button<{ $primary?: boolean }>`
    ${(p) => (p.$primary ? 'bg-indigo-600' : 'bg-indigo-300')}

    flex
    inline-flex
    items-center
    border
    border-transparent
    text-xs
    font-medium
    rounded
    shadow-sm
    text-white

    hover:bg-indigo-700
    focus:outline-none
`;

export default function Home() {
  const posts = allPosts.map((post) => post);

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
      <h2>DJA NEXT TEMPLATE</h2>
      <div dangerouslySetInnerHTML={{ __html: posts[0].title }} />
      <Button>mololow</Button>

      <Mdx code={posts[0].body.code} />
    </main>
  );
}
