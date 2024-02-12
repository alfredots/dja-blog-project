import { siteConfig } from '@/config';
import { PostService } from '@/services/PostService';

import { Grid } from '@/components/Grid';
import { Pagination } from '@/components/Pagination';
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

      <Pagination
        currentPage={1}
        numberPages={4}
        prevPage="/"
        nextPage="/?page=2"
      />
    </main>
  );
}
