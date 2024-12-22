import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const IoLogoutIcon: React.FC<SvgIconProps> = ({ className, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17 16 4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"
    />
  </svg>
);

export default IoLogoutIcon;
