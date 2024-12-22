'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Select } from '@mantine/core';
import { useRole } from '@/context/RoleContext';

const SignIn: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('viewer');
  const { setRole } = useRole();
  const router = useRouter();

  const handleLogin = () => {
    // Save the role to localStorage
    localStorage.setItem('role', selectedRole);
    // Update the context
    setRole(selectedRole);
    // Redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-200">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign In
            </h2>

            <form>
              {/* Role selection */}
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Select Role
                </label>
                <Select
                  value={selectedRole}
                  onChange={(value) => setSelectedRole(value || 'viewer')}
                  data={[
                    { value: 'viewer', label: 'Viewer' },
                    { value: 'admin', label: 'Admin' },
                    { value: 'uploader', label: 'Uploader' },
                  ]}
                  classNames={{
                    input:
                      'rounded-lg border-stroke bg-transparent py-4 pl-6 pr-10 text-black focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary',
                    dropdown: 'rounded-lg',
                  }}
                  placeholder="Select a role"
                />
              </div>

              {/* Submit button */}
              <div className="mb-5">
                <Button
                  fullWidth
                  onClick={handleLogin}
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary  text-white transition hover:bg-opacity-90"
                >
                  Login as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
