'use client';

import { useRole } from '@/context/RoleContext';

export default function DashboardPage() {
  const { role } = useRole();

  if (!role) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>
        You are logged in as <strong>{role}</strong>.
      </p>
    </div>
  );
}
