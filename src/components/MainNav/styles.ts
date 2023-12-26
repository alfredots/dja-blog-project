import tw from 'tailwind-styled-components';

export const Nav = tw.nav`
  flex
  items-center
  justify-between
`;

export const Ul = tw.ul`
  flex
  gap-4
`;

export const Li = tw.li`
  transition-colors
  duration-300
  ease-in-out
  hover:text-link
`;

export const Content = tw.div`
  z-50
  flex
  transition-colors
  duration-300
  hover:text-link
  lg:hidden
`;
