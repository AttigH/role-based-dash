import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div
        className={`fixed z-20 inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out rounded-tr-2xl rounded-br-2xl
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:w-2/12`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                href="/dashboard"
                className="block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/users"
                className="block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors duration-200"
              >
                User Management
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/dashboard/uploads"
                className="block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors duration-200"
              >
                Uploads Management
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/help"
                className="block px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-400 transition-colors duration-200"
              >
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
