import React from 'react';
import { Modal } from '@mantine/core';

// Reusable Modal Component
interface ReusableModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ReusableModalProps> = ({ opened, onClose, title, children }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      centered
    >
      {children}
    </Modal>
  );
};
export default ModalWrapper;
