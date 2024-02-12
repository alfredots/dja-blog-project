import { allPosts } from 'contentlayer/generated';

import { formatPosts } from '@/functions';

type GetPostAllParams = {
  limit?: number;
  currentPage?: number;
};

export const PostService = {
  getAll: ({ limit = 10, currentPage = 1 }: GetPostAllParams = {}) => {
    const formattedPosts = formatPosts(allPosts);
    const numberPages = Math.ceil(formattedPosts.length / limit);

    // precisa de uma função para retornar os posts paginados

    return {
      posts: formattedPosts,
      numberPages
    };
  },
  getBySlug: (slug: string) => {
    const formattedPosts = formatPosts(allPosts);
    const post = formattedPosts.find((post) => post.slug === slug);

    return post;
  }
};
