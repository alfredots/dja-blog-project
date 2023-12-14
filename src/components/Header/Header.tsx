import Link from 'next/link';

import { Logo } from '@/components/Logo';

import { HeaderNav } from '@/models';

import * as S from './styles';

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.Ul>
            {items.mainNav.map((item, index) => (
              <S.Li key={item.title + index}>
                <Link href={item.href}>{item.title}</Link>
              </S.Li>
            ))}
          </S.Ul>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
