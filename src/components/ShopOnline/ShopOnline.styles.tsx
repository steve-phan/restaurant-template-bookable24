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
  overflow: 'visible',
  position: 'sticky',
  zIndex: 1100,
  height: 45,
  listStyle: 'none',
  overflowX: 'scroll',
  // width: 'calc(100% + 32px)',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  scrollPadding: 0,
  top: 64,
}));

export const CategorySt = styled('div')(({ theme }) => ({
  // padding: '8px 16px',
  WebkitOverflowScrolling: 'touch',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  scrollPadding: 0,
  position: 'relative',
  width: '100%',
  // width: 'calc(100% + 180px)',
  transition: 'all 0.5s linear',
  zIndex: 1100,
}));

export const CategoryMenuSt = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 64,

  display: 'inline-block',
  // padding: '8px 16px',
  // transform: 'translateZ(0)',
  background: 'white',
  // overflow: 'visible',
  width: '100%',
  // height: 60,
  zIndex: 1100,
}));

export const CategoryItemSt = styled('div')<{ active?: 'active' | 'normal' }>(
  ({ theme, active }) => ({
    position: 'relative',
    cursor: 'pointer',
    padding: '8px 10px',
    maxWidth: '40vh',
    margin: '0 auto',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    // flexShrink: 0,
    width: 'auto',
    zIndex: 3,
    textAlign: 'center',
    fontFamily: 'Mukta, sans-serif',

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
