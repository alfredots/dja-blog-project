'use client';
import NextLink from 'next/link';

import tw from 'tailwind-styled-components';

import { ArrowLeftIcon, ArrowRightIcon } from '@/components/Icons';

export const Container = tw.div`
  flex
  w-full
  items-center
  justify-between
  pt-7
`;

const sharedIconStyles = `
  transition-transform
  text-lg
  duration-300
  ease-in-out
`;

export const PrevPageIcon = tw(ArrowLeftIcon)`
  ${() => sharedIconStyles}

  group-hover:-translate-x-1
`;

export const NextPageIcon = tw(ArrowRightIcon)`
  ${() => sharedIconStyles}

  group-hover:translate-x-1
`;

export const Link = tw(NextLink)`
  flex
  items-center
  gap-2
  group

  duration-300
  transition-colors
  hover:text-link
`;
