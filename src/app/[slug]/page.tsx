import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/config';
import { PostService } from '@/services/PostService';

import { Post } from '@/components/Post';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const { posts } = PostService.getAll();

  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PostPageProps) {
  const { slug } = params;

  const post = PostService.getBySlug(slug);

  if (!post) {
    return {
      title: 'Post não encontrado'
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/${post.slug}`,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      siteName: siteConfig.name,
      image: [
        {
          url: `${siteConfig.url}${post.frontmatter.image}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [`${siteConfig.url}${post.frontmatter.image}`]
    }
  } as Metadata;
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = PostService.getBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Post post={post} />
    </main>
  );
}
