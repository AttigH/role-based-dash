import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const IoEditIcon: React.FC<SvgIconProps> = ({ className, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3.5M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
  </svg>
);

export default IoEditIcon;
