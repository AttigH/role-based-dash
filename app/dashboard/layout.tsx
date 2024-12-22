'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Loader from '@/components/Loader/Loader';
import { useRole } from '@/context/RoleContext';

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [loading, setLoading] = useState<boolean>(true);
  const { role } = useRole();
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // eslint-disable-next-line no-console
  console.log('****', role);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
