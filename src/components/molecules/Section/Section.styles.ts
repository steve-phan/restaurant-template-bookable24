import { styled } from '@mui/material/styles';

interface ISectionStyleProps {
  isSeparate?: boolean;
  content?: 'left' | 'right';
}

export const SectionSt = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: `calc(100vh - ${theme.config.heightNavbar}px)`,

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const SectionBackGroundSt = styled('div')<ISectionStyleProps>(
  ({ theme, isSeparate, content }) => ({
    minHeight: `calc(100vh - ${theme.config.heightNavbar}px)`,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: isSeparate ? '50%' : '100%',
    },
  })
);

export const SectionContextSt = styled('div')<ISectionStyleProps>(
  ({ theme, isSeparate, content }) => ({
    textAlign: 'center',
    width: '100%',
    maxWidth: 600,
    background: 'black',
    color: 'white',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: isSeparate ? '50%' : '100%',
    },
  })
);

export const HeaderSt = styled('h1')(({ theme }) => ({
  fontSize: 40,

  [theme.breakpoints.up('md')]: {
    fontSize: 64,
  },
}));

export const SubHeaderSt = styled('h3')(({ theme }) => ({
  fontSize: 28,

  [theme.breakpoints.up('md')]: {
    fontSize: 40,
  },
}));

export const DescriptionSt = styled('p')(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,

  [theme.breakpoints.up('md')]: {
    fontSize: 18,
  },
}));
