'use client';

import Link from 'next/link';

import { MainNavType } from '@/models';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

type MainNavProps = {
  items: MainNavType;
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

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

        <S.Content>
          <ToggleButton
            isOpenMenu={isOpenMenu}
            handleToggleMenu={handleToggleMenu}
          />
        </S.Content>

        {isOpenMenu && (
          <div className="fixed left-0 top-0 z-30 min-h-screen w-full overflow-hidden bg-primary/80 pt-[4rem] lg:hidden">
            <S.NavMobile>
              <S.ListMobile>
                {items.mainNav.map((item, index) => (
                  <S.ListItemMobile key={item.title + index}>
                    <Link href={item.href}>{item.title}</Link>
                  </S.ListItemMobile>
                ))}
              </S.ListMobile>
            </S.NavMobile>
          </div>
        )}
      </S.Nav>
    </>
  );
};
