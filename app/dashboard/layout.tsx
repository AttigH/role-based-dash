'use client';

import { PropsWithChildren } from 'react';
import Layout from '@/components/Layout/Layout';
import { useRole } from '@/context/RoleContext';

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { role } = useRole();
  if (!role) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
