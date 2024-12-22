import React, { useState } from 'react';
import { Divider } from '@mantine/core';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import MainHeader from '../Header/MainHeader';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}

        <div className="flex-1 overflow-auto ">
          <MainHeader setSidebarOpen={setSidebarOpen} />
          <div className="block lg:hidden p-4">
            <Breadcrumb />
            <Divider my="sm" />
          </div>

          {/* Main Content Area */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
