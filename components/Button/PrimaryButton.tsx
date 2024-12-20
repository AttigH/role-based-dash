import React from 'react';

// Define the type for the button props
interface PrimaryButtonProps {
  onClick: () => void;
  ariaControls?: string;
  className?: string;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  ariaControls = '',
  className = '',
  children,
}) => {
  return (
    <button
      onClick={onClick}
      aria-controls={ariaControls}
      type="button"
      className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
