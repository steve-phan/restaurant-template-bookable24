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
  width: '100%',
  // width: 'calc(100% + 180px)',
  transition: 'all 0.5s linear',
}));

export const CategoryMenuSt = styled('div')(({ theme }) => ({
  WebkitOverflowScrolling: 'touch',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  scrollPadding: 0,
  position: 'relative',
  listStyle: 'none',
  width: 'calc(100% + 32px)',

  display: 'flex',
  padding: '8px 16px',
}));

export const CategoryItemSt = styled('div')<{ active: 'active' | 'normal' }>(
  ({ theme, active }) => ({
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 16px',
    maxWidth: '40vh',
    margin: '0 auto',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',

    color: active === 'active' ? theme.color.secondary : 'black',
    backgroundColor:
      active === 'active' ? theme.color.secondaryBackground : 'white',
    borderRadius: 6,
    border:
      active === 'active'
        ? `1px solid ${theme.color.secondaryBackground}`
        : `0 solid white`,
  })
);

export const HeadingSectionSt = styled('h2')(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  fontSize: 20,
  padding: 16,
  background: theme.color.background,

  [theme.breakpoints.up('md')]: {
    fontSize: 22,
  },
}));
