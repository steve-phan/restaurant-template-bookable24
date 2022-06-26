import { styled } from '@mui/material/styles';

export const CategorySectionSt = styled('div')(({ theme }) => ({
  padding: '8px 16px',
}));

export const HeadingSectionSt = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: 20,
  padding: 16,
  background: theme.color.background,

  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
}));

export const ShopOnlineSt = styled('div')(({ theme }) => ({
  // padding: 16,
}));
