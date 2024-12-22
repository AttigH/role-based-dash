import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname hook

import { Button } from '@mantine/core';
import { useRole } from '@/context/RoleContext';
import IoHomeIcon from '@/icons/IoHome';
import IoLogoutIcon from '@/icons/IoLogout';
import IoUploadsIcon from '@/icons/IoUploads';
import IoUsersIcon from '@/icons/IoUsers';
import eagleIcon from '@/public/images/eagle.png';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter();
  const { setRole, role } = useRole();
  const getLinkClassNames = (path: string) => {
    const baseClass =
      'group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 hover:bg-blue-400';
    const activeClass = pathname === path ? 'border-r-4 border-white' : ''; // Apply the left border for active link

    return `${baseClass} ${activeClass}`;
  };
  const handleLogout = () => {
    // Clear the role from localStorage
    localStorage.removeItem('role');
    // Reset the role in the context
    setRole(''); // Set role to empty string
    // Redirect to login page
    router.push('/login');
  };
  return (
    <>
      <div
        className={`absolute left-0 top-0 z-50 flex h-screen w-72.5 flex-col overflow-y-hidden rounded-tr-2xl rounded-br-2xl bg-gradient-to-b  from-blue-500 to-blue-600 duration-300 ease-linear lg:static lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} `}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-center gap-2 px-6 py-5.5 lg:py-6.5">
          <Image src={eagleIcon} alt="eagle" width={100} height={100} />
          {/* <h2 className="text-white text-2xl font-bold mb-6">Dashboard</h2> */}
        </div>
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link href="/dashboard" className={getLinkClassNames('/dashboard')}>
                  <IoHomeIcon width={30} height={30} />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/dashboard/users" className={getLinkClassNames('/dashboard/users')}>
                  <IoUsersIcon width={30} height={30} />
                  User Management
                </Link>
              </li>
              {role !== 'viewer' && (
                <li>
                  <Link
                    href="/dashboard/uploads"
                    className={getLinkClassNames('/dashboard/uploads')}
                  >
                    <IoUploadsIcon width={30} height={30} />
                    Uploads Management
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="mt-auto px-4 py-6">
          <Button onClick={handleLogout} rightSection={<IoLogoutIcon width={20} height={20} />}>
            Logout
          </Button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === 'Space') {
              setSidebarOpen(false);
            }
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
