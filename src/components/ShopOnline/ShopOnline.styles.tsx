import { styled } from '@mui/material/styles';

export const ShopOnlineSt = styled('div')(({ theme }) => ({
  // padding: 16,
}));

export const ShopOnlineInfoSt = styled('div')(({ theme }) => ({
  textAlign: 'center',

  padding: 16,
}));

export const CategorySectionSt = styled('div')(({ theme }) => ({
  padding: '8px 16px',
}));

export const WrapCategorySt = styled('div')(({ theme }) => ({
  paddingBottom: 6,
  paddingRight: 16,
  background: 'white',
  overflow: 'hidden',
  position: 'sticky',

  top: 64,
  zIndex: 3,
  height: 45,
}));

export const CategorySt = styled('div')(({ theme }) => ({
  // padding: '8px 16px',
  position: 'relative',
  width: 'calc(100% + 180px)',
  transition: 'left 450 linear',
}));

export const CategoryMenuSt = styled('div')(({ theme }) => ({
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  scrollPadding: 0,
  position: 'relative',
  listStyle: 'none',

  display: 'flex',
  padding: '8px 16px',
}));

export const CategoryItemSt = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '8px 16px',
  maxWidth: '40vh',
  margin: '0 auto',
  lineHeight: 1.4,
  whiteSpace: 'nowrap',

  p: {
    position: 'relative',
  },
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
