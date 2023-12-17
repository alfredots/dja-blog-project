import { allPosts } from 'contentlayer/generated';

import { siteConfig } from '@/config';

import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';
import { Profile } from '@/components/Profile';

export default function Home() {
  const posts = allPosts;

  return (
    <main className="">
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <div>
        <Grid gap={10} sm={1} md={2} lg={3}>
          {posts.map((post) => (
            <PostCard key={post._id} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
