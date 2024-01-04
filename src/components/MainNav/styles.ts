import tw from 'tailwind-styled-components';

import * as ListItemStyles from '@/components/List/components/ListItem/styles';
import * as ListStyles from '@/components/List/styles';

export const Nav = tw.nav`
  flex
  items-center
  justify-between
`;

export const Ul = tw.ul`
  hidden
  gap-4
  lg:flex
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

export const NavMobile = tw.nav`
  mx-auto
  flex
  max-w-[80%]
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-600
  bg-secundary
  py-3
  shadow-2xl
`;

export const ListMobile = tw(ListStyles.Container)`
  w-full
  flex-col
  px-4
`;

export const ListItemMobile = tw(ListItemStyles.Container)`
  border-b
  border-gray-50
  py-3
`;
