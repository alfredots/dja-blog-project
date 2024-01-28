import { allPosts } from 'contentlayer/generated';

import { formatDate } from '@/functions';

export const PostService = {
  getAll: () => {
    const formattedPosts = allPosts.map((post) => {
      return {
        slug: post.slug,
        body: post.body,
        readingTime: Math.ceil(post.readingTime.minutes),
        frontmatter: {
          title: post.title,
          description: post.description,
          date: formatDate(post.date),
          tags: post.tags,
          image: post.image
        }
      };
    });
    return {
      posts: formattedPosts
    };
  }
};
