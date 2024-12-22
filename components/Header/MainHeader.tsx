import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import UserProfile from './UserProfile';

interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainHeader: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-end gap-6">
          <div className="bg-white p-2 shadow-md flex items-center lg:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <Breadcrumb />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
