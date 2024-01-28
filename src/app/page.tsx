import { siteConfig } from '@/config';
import { PostService } from '@/services/PostService';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';
import { Profile } from '@/components/Profile';

export default function Home() {
  const { posts } = PostService.getAll();

  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <Grid gap={10} sm={1} md={2} lg={3}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </main>
  );
}
