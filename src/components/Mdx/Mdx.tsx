import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import '@/styles/mdx.css';

const components: MDXComponents = {
  h1: ({ className = '', children, ...props }) => (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  ),
  pre: ({ className = '', children, ...props }) => (
    <pre
      className={`text-md mb-4 mt-6 overflow-x-auto rounded-lg py-4 ${className}`}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ className = '', children, ...props }) => (
    <code
      className={`text-md relative rounded bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </code>
  )
};

export const Mdx = ({ code = '' }) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};
