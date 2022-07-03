import { styled } from '@mui/material/styles';

export const DesktopViewCartSt = styled('div')(({ theme }) => ({
  position: 'fixed',
  maxHeight: 'calc(100vh - 66px)',
  top: 66,
  width: 350,

  display: 'flex',
  flexDirection: 'column',
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  // overflowX: 'hidden',
  // overflowY: 'auto',
}));

export const DesktopViewCartHeadingSt = styled('div')(({ theme }) => ({
  flexShrink: 0,
  textAlign: 'center',
  padding: 16,
  fontWeight: 700,
  borderBottom: `1px solid ${theme.color.borderColor}`,
}));

export const DesktopViewCartFoodListSt = styled('div')(({ theme }) => ({
  flexGrow: 0,

  overflowX: 'hidden',
  overflowY: 'auto',
}));

export const DesktopViewCartActionButtonSt = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  flexShrink: 0,
  height: 60,
}));
