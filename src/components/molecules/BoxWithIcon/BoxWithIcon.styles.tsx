import { styled } from '@mui/material/styles';

export const BoxHeadingWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  svg: {
    width: 30,
    height: 30,
    color: theme.color.primary,

    [theme.breakpoints.up('md')]: {
      width: 26,
      height: 26,
    },
  },
}));

export const BoxWithIconst = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 300,
  margin: '0 auto',
}));

export const BoxHeading = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 8,
  fontSize: 26,
  color: theme.color.gray,

  [theme.breakpoints.up('md')]: {
    fontSize: 26,
  },
}));

export const BoxDescrition = styled('span')(({ theme }) => ({
  display: 'block',
  width: 'fit-content',
  color: theme.color.gray,
}));
