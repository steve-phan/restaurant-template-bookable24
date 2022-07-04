import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  color: {
    primary: '#f05123',
    // primary: "#764abc",
    secondary: '#1976d2',
    secondaryBackground: '#f8f5f2',
    warning: '#d1cec3',
    white: '#ffffff',
    gray: '#666',
    text: '#202124',
    invalid: '#f33a58',
    background: '#fdefe1',
    black: '#000000',
    activeBackground: '#fff1f9',
    greyBackground: '#f5f5f5',
    activeColor: 'deeppink',
    iconColor: '#e84b63',
    borderColor: '#e4e4e4',
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
