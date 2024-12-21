import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Header from '../Sidebar/HeaderBar';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header setSidebarOpen={setSidebarOpen} />

        <div className="p-6 flex-1 overflow-auto">
          {/* Breadcrumb */}
          <nav className="text-sm  bg-gradient-to-b from-blue-50 to-blue-100 text-white shadow-lg p-4 rounded-md">
            <Breadcrumb />
          </nav>

          {/* Main Content Area */}
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
