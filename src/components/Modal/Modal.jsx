import { useEffect } from 'react';
import { Modal as MuiModal, Paper, Box } from '@mui/material';

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const paperStyle = {
  padding: '20px',
};

export const Modal = ({ children, onCloseModal, open }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <MuiModal open={open} style={modalStyle} onClose={onCloseModal}>
      <Paper style={paperStyle}>
        <Box onClick={handleBackdropClick}>{children}</Box>
      </Paper>
    </MuiModal>
  );
};
