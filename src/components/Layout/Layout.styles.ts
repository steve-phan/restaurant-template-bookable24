import { styled } from '@mui/material/styles';

export const BodySt = styled('div')(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: theme.config.heightNavbar,
  width: '100%',
  float: 'left',
}));
// `
//   flex-grow: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding-top: `${heightNavbar}px`;
//   width: 100%;
//   float: left;
//   min-height: 100vh;
// `

export const MainSt = styled('main')`
  padding: 0;
  width: 100%;
`;
