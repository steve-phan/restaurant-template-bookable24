import { styled } from '@mui/material/styles';

export const TextWarningSt = styled('p')(({ theme }) => ({
  fontSize: 14.5,
  paddingLeft: 10,
  marginBottom: 8,
  marginTop: 8,
  color: '#333',
  borderLeft: `2px solid ${theme.color.primary}`,
}));
