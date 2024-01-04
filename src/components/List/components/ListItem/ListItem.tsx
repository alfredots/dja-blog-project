import { LiHTMLAttributes } from 'react';

import * as S from './styles';

type ListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

export const ListItem = ({ children }: ListItemProps) => {
  return <S.Container>{children}</S.Container>;
};
