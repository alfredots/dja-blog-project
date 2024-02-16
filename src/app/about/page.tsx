import { Metadata } from 'next';

import { siteConfig } from '@/config';

import { Link } from '@/components/Link';

import * as S from './styles';

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: 'Sobre mim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Sobre mim',
    url: '/about',
    description: 'Sobre mim',
    siteName: 'Sobre mim',
    images: [
      {
        url: `${siteConfig.url}/assets/images/image-post.jpg`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mim',
    description: 'Sobre mim',
    images: [`${siteConfig.url}/assets/images/image-post.jpg`]
  }
};

export default function AboutPage() {
  return (
    <main>
      <S.Title>Sobre mim</S.Title>

      <S.SubTitle>
        Minha missão é inspirar a imaginação dos usuários, utilizando a
        tecnologia para criar experiências incríveis e inovadoras.
      </S.SubTitle>

      <S.ImageContainer>
        <S.Image
          src="/assets/images/download.avif"
          alt="profile photo"
          fill
          priority
        />
      </S.ImageContainer>

      <S.Paragraph>
        Sou formado em Ciência da Computação pela Universidade Federal do
        Maranhão, onde iniciei minha jornada em 2016 no laboratório Telemidia,
        focado no desenvolvimento de recursos multimídia interativos para a web.
        Ao longo da minha trajetória universitária, mergulhei profundamente no
        campo do desenvolvimento web, alimentando cada vez mais minha paixão por
        essa área.
      </S.Paragraph>

      <S.Paragraph>
        Atualmente, desempenho o papel de Desenvolvedor Pleno Frontend na
        Dotz/Noverde, onde sou responsável por criar as interfaces dos produtos
        da área de fidelidade e soluções financeiras. Além disso, tenho a
        oportunidade de desenvolver aplicações modernas para atender às
        necessidades dos nossos clientes, proporcionando benefícios através da
        nossa plataforma.
        <Link href="#">teste</Link>
      </S.Paragraph>

      <S.Paragraph>
        Tenho experiência no desenvolvimento de projetos para diversas áreas,
        incluindo finanças, educação, saúde e varejo. Trabalhei com empresas
        renomadas, como Grupo Mateus, UNA/SUS (Universidade Aberta do SUS),
        SESC, entre outras, entregando soluções inovadoras e eficientes para
        atender suas necessidades específicas.
      </S.Paragraph>
    </main>
  );
}
