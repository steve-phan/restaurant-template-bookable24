import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  color: {
    primary: '#f05123',
    // primary: "#764abc",
    secondary: '#1473e6',
    warning: '#d1cec3',
    white: '#ffffff',
    gray: '#666',
    text: '#202124',
    invalid: '#f33a58',
    background: '#f3f3f3ee',
    black: '#000000',
    activeBackground: '#fff1f9',
    activeColor: 'deeppink',
    iconColor: '#e84b63',
  },
  config: {
    heightNavbar: 65,
  },
});

export const globalStyles = {
  a: {
    textDecoration: 'none',
  },
};
