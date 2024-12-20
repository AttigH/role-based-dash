'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useRole } from '@/context/RoleContext';

export default function LoginPage() {
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
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}
    >
      <h1>Login Page</h1>
      <label htmlFor="role">Select Role:</label>
      <select
        id="role"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px' }}
      >
        <option value="admin">Admin</option>
        <option value="viewer">Viewer</option>
        <option value="uploader">Uploader</option>
      </select>
      <button
        type="button"
        onClick={handleLogin}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        Login as {selectedRole}
      </button>
    </div>
  );
}
