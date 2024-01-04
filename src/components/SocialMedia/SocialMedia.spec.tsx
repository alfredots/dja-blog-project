import { render, screen } from '@testing-library/react';

import { LinkedinIcon, GithubIcon } from '@/components/Icons';

import { SocialMedia } from './SocialMedia';

const items = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/alfredo-tito-837429ba/',
    icon: <LinkedinIcon data-testid="linkedin-icon" />
  },
  {
    title: 'Github',
    href: 'https://github.com/alfredots',
    icon: <GithubIcon data-testid="github-icon" />
  }
];

describe('<SocialMedia/>', () => {
  it('should render', () => {
    render(<SocialMedia items={items} />);

    const firstLink = screen.getByRole('link', { name: items[0].title });
    const secondLink = screen.getByRole('link', { name: items[1].title });

    const firstIcon = screen.getByTestId('linkedin-icon');
    const secondIcon = screen.getByTestId('github-icon');

    expect(firstLink).toHaveAttribute('href', items[0].href);
    expect(secondLink).toHaveAttribute('href', items[1].href);

    expect(firstIcon).toBeVisible();
    expect(secondIcon).toBeVisible();
  });
});
