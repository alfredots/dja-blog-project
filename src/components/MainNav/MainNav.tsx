import Link from 'next/link';

import { MainNavType } from '@/models';

import * as S from './styles';

type MainNavProps = {
  items: MainNavType;
};

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <>
      <S.Nav>
        <S.Ul>
          {items.mainNav.map((item, index) => (
            <S.Li key={item.title + index}>
              <Link href={item.href}>{item.title}</Link>
            </S.Li>
          ))}
        </S.Ul>
      </S.Nav>
    </>
  );
};
