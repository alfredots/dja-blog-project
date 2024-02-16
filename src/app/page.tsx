import type { Metadata } from 'next';

import { siteConfig } from '@/config';
import { paginationPages } from '@/functions';
import { PostService } from '@/services/PostService';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { Profile } from '@/components/Profile';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/assets/images/image-post.jpg'
      }
    ]
  },
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/image-post.jpg`]
  }
};

export default function Home() {
  const { posts, currentPage, numberPages } = PostService.getAll({ limit: 2 });
  const { prevPage, nextPage } = paginationPages(currentPage);

  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numberPages={numberPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
}
