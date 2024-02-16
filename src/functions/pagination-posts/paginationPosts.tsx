import { BlogPost } from '@/models';

export const paginationPosts = (posts: BlogPost[], limit = 10, page = 1) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalPosts = posts.slice(startIndex, endIndex);

  return totalPosts;
};
