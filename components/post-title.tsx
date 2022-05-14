import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1
      className="text-4xl font-semibold tracking-tighter leading-snug mb-4 break-word"
      style={{ wordBreak: 'keep-all' }}
    >
      {children}
    </h1>
  );
};

export default PostTitle;
