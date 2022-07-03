import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export const NavbarMenuSt = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

export const NavbarMenuHeaderSt = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 16,
  background: 'white',
}));

export const DrawerSt = styled(Drawer)(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  '& .MuiPaper-root ': {
    justifyContent: 'space-evenly',
    minWidth: '100vw',
  },
}));

export const WrapCloseIconSt = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: 40,
  height: 40,
  // position: 'absolute',
  // top: 20,
  // right: 20,
  svg: {
    color: theme.color.primary,
    fontSize: 30,
  },
}));

export const BackgroundImgSt = styled('img')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: -1,
  opacity: 0.6,
  height: '100vh',
  maxHeight: '100vh',
  width: '100vw',
}));

export const NavbarMenuBodyrSt = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  // display: 'flex',
  margin: '0 auto',
}));

export const AccountButtonGroupSt = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
}));
