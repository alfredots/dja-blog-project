import Link from 'next/link';

import { siteConfig, socialLinksConfig } from '@/config';

import { Layout } from '@/components/Layout';
import { List, ListItem } from '@/components/List';
import { Logo } from '@/components/Logo';
import { SocialMedia } from '@/components/SocialMedia';

import { NavItem } from '@/models';

import * as S from './styles';

type FooterProps = {
  items: NavItem[];
};

export const Footer = ({ items }: FooterProps) => {
  return (
    <Layout>
      <S.Container>
        <S.Content>
          <S.Section role="contentinfo">
            <Logo />
            <S.Title>{siteConfig.title}</S.Title>
          </S.Section>

          <S.Section role="contentinfo">
            <S.Title>Redes</S.Title>
            <SocialMedia items={socialLinksConfig.mainNav} />
          </S.Section>

          <S.Section>
            <S.Title>Sitemap</S.Title>

            <List className="flex-col">
              {items.map((item) => (
                <ListItem key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </ListItem>
              ))}
            </List>
          </S.Section>
        </S.Content>

        <S.CopyrightContainer>
          <S.CopyrightContent>
            Todos os direitos rservados - Alfredo Tito{' '}
            {new Date().getFullYear()}
          </S.CopyrightContent>
        </S.CopyrightContainer>
      </S.Container>
    </Layout>
  );
};
