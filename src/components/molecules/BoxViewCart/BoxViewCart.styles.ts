import { styled } from '@mui/material/styles';

export const WrapperBoxViewCartst = styled('div')(({ theme }) => ({
  width: '100%',
  background: 'white',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,

  // height: '60px',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
}));

export const BoxViewCartst = styled('div')(({ theme }) => ({
  // position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100vw',
  zIndex: 1100,
  maxWidth: 700,

  background: theme.color.secondary,

  [theme.breakpoints.up('md')]: {
    // display: 'none',
    left: 'calc(50vw - 358px)',
    right: 'calc(50vw - 358px)',
  },
}));

export const SumQuantitiesSt = styled('span')(({ theme }) => ({
  position: 'absolute',
  width: 24,
  height: 24,
  borderRadius: '50%',
  bottom: '-2px',
  right: '-2px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  WebkitBoxAlign: 'center',
  WebkitBoxPack: 'center',

  fontSize: 12,
  fontWeight: 600,
  color: 'white',
  background: theme.color.primary,
}));
