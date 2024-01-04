import { LinkedinIcon, GithubIcon } from '@/components/Icons';

import { MainNavType } from '@/models';

export const socialLinksConfig: MainNavType = {
  mainNav: [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/alfredo-tito-837429ba/',
      icon: <LinkedinIcon size={28} />
    },
    {
      title: 'Github',
      href: 'https://github.com/alfredots',
      icon: <GithubIcon size={28} />
    }
  ]
};
