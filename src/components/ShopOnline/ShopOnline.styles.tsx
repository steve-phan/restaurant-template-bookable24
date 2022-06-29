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
  position: 'sticky',
  top: 64,
  width: '100%',
  background: 'white',
  zIndex: 1000,
}));

export const CategoryMenuSt = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 64,
  left: 'calc(50vw - 358px)',
  right: 'calc(50vw - 358px)',
  display: 'inline-block',
  maxWidth: 700,
  margin: '0 auto',
  transform: 'translateZ(0)',
  background: 'transparent',
  width: '100%',
  zIndex: 1000,
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
