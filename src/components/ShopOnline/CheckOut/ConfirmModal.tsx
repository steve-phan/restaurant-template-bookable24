import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { closeViewCartModal } from '@bookable24/store/oder/oderSlice';
import { useAppDispatch } from '@bookable24/store/hooks';

export interface IConfirmModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  messages: string;
  email?: string;
}

export const ConfirmModal = ({
  open,
  setOpen,
  messages,
  email,
}: IConfirmModalProps) => {
  const { navigate } = useI18next();
  const dispatch = useAppDispatch();

  const handleClose = () => {
    if (messages === 'SUCCESS') {
      dispatch(closeViewCartModal());
      return navigate('/oder');
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='oder-infomations'
        aria-describedby='oder-infomation-text'
        sx={{
          maxWidth: 350,
          margin: '0 auto',
        }}
      >
        <DialogTitle id='oder-infomations'>{'Oder infomation:'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='oder-infomation-text'>
            {messages === 'SUCCESS' ? (
              <>
                Thanks. Oder successfully, we'll send you a confirm-Email
                <strong> {email} </strong> in a few minutes
              </>
            ) : (
              messages
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
