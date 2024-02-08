import { PostService } from '@/services/PostService';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = PostService.getBySlug(slug);

  return <main>{post?.slug}</main>;
}
