export type BlogPost = {
  slug: string;
  readingTime: number;
  body: {
    code: string;
    raw: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags?: string[] | undefined;
    image: string;
  };
};
