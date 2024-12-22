import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from '@mantine/core';
import { showNotification } from '@/utils/notifications';
import ModalWrapper from './ModalWrapper';

interface UserModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (data: User) => void;
  userToEdit?: User | null; // Add userToEdit prop for editing
}

export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  website: string;
  address: {
    city: string;
  };
}

const UserModal: React.FC<UserModalProps> = ({ opened, onClose, onSubmit, userToEdit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: userToEdit || {
      name: '',
      email: '',
      company: { name: '' },
      website: '',
      address: { city: '' },
    },
  });

  const handleFormSubmit = async (data: User) => {
    try {
      await onSubmit(data);
      reset();
      onClose();

      // Success notification
      showNotification({
        type: 'success',
        title: userToEdit ? 'User Updated' : 'User Added',
        message: `The user was ${userToEdit ? 'updated' : 'added'} successfully.`,
      });
    } catch (error) {
      // Error notification
      showNotification({
        type: 'error',
        title: 'Error',
        message: 'There was an error processing the user.',
      });
    }
  };

  const validationRules = {
    name: {
      required: 'Name is required',
      maxLength: {
        value: 50,
        message: 'Name cannot exceed 50 characters',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email address',
      },
    },
    companyName: {
      required: 'Company Name is required',
    },
    website: {
      required: 'Website is required',
      pattern: {
        value: /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/.*)?$/,
        message: 'Enter a valid website URL',
      },
    },
    city: {
      required: 'City is required',
    },
  };

  const getErrorMessage = (error: any): string | undefined => {
    return error?.message || undefined;
  };

  // Reset form when modal is closed or userToEdit changes
  useEffect(() => {
    if (!opened) {
      reset();
    } else if (userToEdit) {
      reset(userToEdit); // Set form values to userToEdit if editing
    }
  }, [opened, reset, userToEdit]);

  return (
    <ModalWrapper
      opened={opened}
      onClose={onClose}
      title={userToEdit ? 'Edit User' : 'Add New User'}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={validationRules.name}
          render={({ field }) => (
            <TextInput
              label="Name"
              placeholder="Enter name"
              error={getErrorMessage(errors.name)}
              {...field}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={validationRules.email}
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="Enter email"
              error={getErrorMessage(errors.email)}
              {...field}
            />
          )}
        />

        <Controller
          name="company.name"
          control={control}
          rules={validationRules.companyName}
          render={({ field }) => (
            <TextInput
              label="Company Name"
              placeholder="Enter company name"
              error={getErrorMessage(errors.company?.name)}
              {...field}
            />
          )}
        />

        <Controller
          name="website"
          control={control}
          rules={validationRules.website}
          render={({ field }) => (
            <TextInput
              label="Website"
              placeholder="Enter website"
              error={getErrorMessage(errors.website)}
              {...field}
            />
          )}
        />

        <Controller
          name="address.city"
          control={control}
          rules={validationRules.city}
          render={({ field }) => (
            <TextInput
              label="City"
              placeholder="Enter city"
              error={getErrorMessage(errors.address?.city)}
              {...field}
            />
          )}
        />

        <Button type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default UserModal;
