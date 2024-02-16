import { AnchorHTMLAttributes, ReactNode } from 'react';

import * as S from './styles';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export const Link = ({ href, children, ...rest }: LinkProps) => {
  return (
    <>
      <S.Container href={href} {...rest}>
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};
