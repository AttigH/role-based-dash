import { useState } from 'react';
import { Button, Modal, TextInput } from '@mantine/core';
import { User } from '@/types/userTypes';

type EditUserModalProps = {
  opened: boolean;
  onClose: () => void;
  user: User | null; // Currently selected user to edit
  onSubmit: (updatedUser: User) => void; // Function to submit the updated user
};

const EditUserModal: React.FC<EditUserModalProps> = ({ opened, onClose, user, onSubmit }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [city, setCity] = useState(user?.address.city || '');

  const handleSubmit = () => {
    if (user) {
      const updatedUser = { ...user, name, email, address: { ...user.address, city } };
      onSubmit(updatedUser);
      onClose();
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Edit User">
      <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <TextInput label="City" value={city} onChange={(e) => setCity(e.target.value)} required />
      <Button onClick={handleSubmit} color="blue" className="mt-4">
        Save Changes
      </Button>
    </Modal>
  );
};

export default EditUserModal;
