import { siteConfig } from '@/config';
import { render } from '@testing-library/react';

import { Footer } from './Footer';

const items = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/about',
    title: 'Sobre mim'
  }
];

describe('<Footer/>', () => {
  it('should render correctly', () => {
    const screen = render(<Footer items={items} />);

    const socialMediaSection = screen.getByText(/redes/i);
    const sitemapSection = screen.getByText(/sitemap/i);
    const title = screen.getByText(siteConfig.title);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(sitemapSection).toBeVisible();
  });
});
