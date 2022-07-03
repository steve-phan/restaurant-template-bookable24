import { Link } from 'gatsby-plugin-react-i18next';
import { styled } from '@mui/material/styles';

export const NavLinksSt = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  position: 'absolute',
  top: 20,
  right: 20,
}));

export const LinkItemSt = styled(Link)(({ theme }) => ({
  width: '100%',
  fontSize: 16,
  fontWeight: 500,
  padding: '12px 8px',
  marginTop: 6,
  display: 'flex',
  alignItems: 'center',
  color: theme.color.white,

  '& svg': {
    marginRight: 16,
    marginLeft: 16,
    fontSize: 18,
    color: theme.color.primary,
  },
}));
