import { styled } from '@mui/material/styles';

export type TBackground = 'transparent' | 'primary';
export const SectionWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: `calc(100vh - ${theme.config.heightNavbar}px)`,
  minHeight: `calc(100vh - ${theme.config.heightNavbar}px)`,

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const SectionContextSt = styled('div')<{ background: TBackground }>(
  ({ theme, background }) => ({
    textAlign: 'center',
    width: '100%',
    maxWidth: 600,
    background: background === 'primary' ? theme.color.primary : background,
    padding: 24,
    color: 'white',
    margin: '0 auto',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 16,
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
  fontSize: 18,
  fontWeight: 400,

  [theme.breakpoints.up('md')]: {
    fontSize: 16,
  },
}));

// export const SectionBackGroundSt = styled('div')<ISectionStyleProps>(
//   ({ theme, separate, content }) => ({
//     minHeight: `calc(100vh - ${theme.config.heightNavbar}px)`,
//     width: '100%',

//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//       width: separate ? '50%' : '100%',
//     },
//   })
// );
