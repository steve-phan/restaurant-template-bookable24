import { styled } from '@mui/material/styles';

export const DeliveryHeadingSt = styled('span')(({ theme }) => ({
  display: 'flex',
  padding: 16,
  fontSize: 14,
  fontStyle: 'italic',

  svg: {
    marginRight: 8,
    color: theme.color.primary,
  },
}));
