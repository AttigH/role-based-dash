'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import IoMenuOutline from '@/icons/IoMenuOutline';
import PrimaryButton from '../Button/PrimaryButton';

export default function Example() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <PrimaryButton onClick={toggleSidebar} ariaControls="default-sidebar">
        <IoMenuOutline className="w-6 h-6 text-primary" />
      </PrimaryButton>

      <div
        ref={sidebarRef}
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/dashboard" className="text-gray-900 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/users" className="text-gray-900 hover:text-blue-600">
                Users
              </Link>
            </li>
            <li>
              <Link href="/dashboard/uploads" className="text-gray-900 hover:text-blue-600">
                Uploads
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
