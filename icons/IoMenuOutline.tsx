import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

const IoMenuOutline: React.FC<SvgIconProps> = ({ className, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    stroke={color}
    strokeWidth="0"
    viewBox="0 0 512 512"
    className={className}
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="32"
      d="M80 160h352M80 256h352M80 352h352"
    />
  </svg>
);

export default IoMenuOutline;
