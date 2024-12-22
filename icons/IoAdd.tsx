import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const IoAddIcon: React.FC<SvgIconProps> = ({ className, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeWidth="0"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
    />
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M256 176v160m80-80H176"
    />
  </svg>
);

export default IoAddIcon;
