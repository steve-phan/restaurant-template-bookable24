import { styled } from '@mui/material/styles';

export const EmptyViewCartSt = styled('div')(({ theme }) => ({
  marginTop: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const EmptyViewCartNoticeSt = styled('span')(({ theme }) => ({
  textAlign: 'center',
}));
