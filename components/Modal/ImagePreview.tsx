import React from 'react';
import ModalWrapper from './ModalWrapper';

interface UserModalProps {
  opened: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImagePreview: React.FC<UserModalProps> = ({ opened, onClose, imageUrl }) => {
  return (
    <ModalWrapper opened={opened} onClose={onClose} title="Image Preview">
      <img src={imageUrl} alt="Full Screen" className="max-w-full max-h-screen object-contain" />
    </ModalWrapper>
  );
};

export default ImagePreview;
