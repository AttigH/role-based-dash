import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}
const IoHomeIcon: React.FC<SvgIconProps> = ({ className, color = 'currentColor', ...props }) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
    />
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
    />
  </svg>
);

export default IoHomeIcon;
