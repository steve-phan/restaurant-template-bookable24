import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export const DrawerSt = styled(Drawer)(({ theme }) => ({
  width: '100vw',
  '& .MuiPaper-root ': {
    justifyContent: 'space-evenly',
    minWidth: '100vw',
  },
}));

export const WrapCloseIconSt = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  position: 'absolute',
  top: 20,
  right: 20,
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
