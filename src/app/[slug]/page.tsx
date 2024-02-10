import { PostService } from '@/services/PostService';

import { Post } from '@/components/Post';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = PostService.getBySlug(slug);

  // TODO: checar se o post existe
  if (!post) {
    return null;
  }

  return (
    <main>
      <Post post={post} />
    </main>
  );
}
