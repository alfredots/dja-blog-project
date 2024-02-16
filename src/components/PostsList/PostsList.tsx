import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';

import { BlogPost } from '@/models';

import * as S from './styles';

type PostListProps = {
  posts: BlogPost[];
};

export const PostsList = ({ posts }: PostListProps) => {
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <S.Container>
      {firstPost && <PostCard post={firstPost} isMain />}

      <Grid gap={10} sm={1} md={2} lg={3}>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
};
