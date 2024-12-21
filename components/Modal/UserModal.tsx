import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextInput } from '@mantine/core';
import ModalWrapper from './ModalWrapper';

interface UserModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => void;
}

const UserModal: React.FC<UserModalProps> = ({ opened, onClose, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      companyName: '',
      website: '',
      city: '',
    },
  });

  const handleFormSubmit = (data: Record<string, any>) => {
    onSubmit(data);
    reset();
    onClose();
  };

  // Validation Rules Object
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
      pattern: {
        value: /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/.*)?$/,
        message: 'Enter a valid website URL',
      },
    },
    city: {
      required: 'City is required',
    },
  };
  // Helper function to safely display error messages
  const getErrorMessage = (error: any): string | undefined => {
    return typeof error?.message === 'string' ? error.message : undefined;
  };
  return (
    <ModalWrapper opened={opened} onClose={onClose} title="Add New User">
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
          name="companyName"
          control={control}
          rules={validationRules.companyName}
          render={({ field }) => (
            <TextInput
              label="Company Name"
              placeholder="Enter company name"
              error={getErrorMessage(errors.companyName)}
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
          name="city"
          control={control}
          rules={validationRules.city}
          render={({ field }) => (
            <TextInput
              label="City"
              placeholder="Enter city"
              error={getErrorMessage(errors.city)}
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
