'use client';

import { PropsWithChildren } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Sidebar from '@/components/Sidebar/Sidebar';

// import Link from 'next/link';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="sm:ml-64 bg-white rounded-md h-full">
        <Sidebar />
        <div className="p-4 rounded-lg ">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <Breadcrumb />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
