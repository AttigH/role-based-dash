import React from 'react';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen }) => {
  return (
    <div className="bg-white p-4 shadow-md flex items-center justify-between md:hidden">
      <button className="text-gray-700" onClick={() => setSidebarOpen((prev) => !prev)}>
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
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </div>
  );
};

export default Header;
