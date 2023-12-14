export type NavItem = {
  title: string;
  href: string;
};

export type MainNav = {
  items: NavItem[];
};

export type HeaderNav = {
  mainNav: NavItem[];
};
