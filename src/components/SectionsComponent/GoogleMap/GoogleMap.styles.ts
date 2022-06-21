import { styled } from '@mui/material/styles';

export const GoogleMapSt = styled('div')(({ theme }) => ({
  paddingTop: 60,
  paddingBottom: 60,
  paddingLeft: 18,
  paddingRight: 18,
  width: '100%',
  background: '#f8f5f2',
  [theme.breakpoints.up('md')]: {
    paddingLeft: 8,
    paddingRight: 8,
  },
}));
