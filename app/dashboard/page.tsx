'use client';

import { useRole } from '@/context/RoleContext';

export default function DashboardPage() {
  const { role } = useRole();

  if (!role) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">Welcome to your Dashboard!</h2>
      <p className="text-lg mt-4">
        This layout adapts to different screen sizes using Tailwind CSS.
      </p>
      <p className="text-lg mt-4">Resize the window to see the responsive design in action.</p>
      <p>
        You are logged in as <strong>{role}</strong>.
      </p>
    </div>
  );
}
