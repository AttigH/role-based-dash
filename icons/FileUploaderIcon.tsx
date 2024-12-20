import * as React from 'react';

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {}

const FileUploaderIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="95"
    height="65"
    fill="none"
    viewBox="0 0 95 65"
    {...props}
  >
    <path
      fill="#6559BB"
      stroke="#F9FFF9"
      strokeWidth="0.323"
      d="M49.323 14.963c-.205.54.2 1.055.787 1.193l.082.02.003-.003c.562.095 1.162-.158 1.346-.647 1.596-4.226 6.646-7.208 12.308-7.208.603 0 1.161-.39 1.161-.948s-.558-.95-1.16-.95c-6.862 0-12.66 3.599-14.527 8.543Zm0 0 .15.057-.15-.057Z"
    />
    <path
      fill="#6559BB"
      d="M77.845 45.955h-5.998c-.552 0-1-.353-1-.787s.447-.788 1-.788h5.998c8.269 0 14.996-5.299 14.996-11.812s-6.727-11.812-14.996-11.812H77.7a1.13 1.13 0 0 1-.756-.271c-.19-.173-.275-.402-.234-.628.09-.49.134-.983.134-1.463 0-5.644-5.83-10.237-12.997-10.237-2.788 0-5.446.686-7.689 1.985-.492.285-1.192.159-1.477-.268C48.332.349 31.744-.93 23.145 7.356c-3.623 3.49-5.046 8.031-3.906 12.457.126.488-.349.944-.98.944h-.4c-8.269 0-14.996 5.3-14.996 11.812 0 6.513 6.727 11.812 14.996 11.812h5.998c.552 0 1 .352 1 .787s-.448.788-1 .788H17.86C8.488 45.956.863 39.95.863 32.569c0-7.175 7.202-13.049 16.211-13.373-.846-4.591.772-9.223 4.522-12.837 9.208-8.872 26.852-7.877 34.31 2.015 2.38-1.175 5.103-1.791 7.942-1.791 8.682 0 15.562 5.82 14.96 12.62 8.926.395 16.032 6.238 16.032 13.365 0 7.382-7.624 13.387-16.996 13.387"
    />
    <path
      fill="#6559BB"
      stroke="#F9FFF9"
      strokeWidth="0.323"
      d="M22.562 44.723c0 10.978 11.323 19.848 25.156 19.848s25.156-8.87 25.156-19.848S61.55 24.875 47.718 24.875s-25.156 8.87-25.156 19.848Zm2.323 0c0-9.864 10.205-17.95 22.833-17.95s22.833 8.086 22.833 17.95-10.205 17.95-22.833 17.95-22.833-8.087-22.833-17.95Z"
    />
    <path
      fill="#6559BB"
      stroke="#EBE8FD"
      strokeWidth="0.323"
      d="M47.281 52.648c0 .441.438.738.894.738.455 0 .893-.296.893-.738v-14.99c0-.44-.438-.737-.893-.737-.456 0-.894.296-.894.737z"
    />
    <path
      fill="#6559BB"
      stroke="#EBE8FD"
      strokeWidth="0.323"
      d="M53.413 42.806c.175.139.4.204.617.204l-11.093-.204 5.238-4.125zm-11.711 0c.344.272.89.272 1.235 0h11.71a.68.68 0 0 0 .276-.534.68.68 0 0 0-.276-.535l-5.855-4.612a1.04 1.04 0 0 0-1.235 0l-5.855 4.612a.68.68 0 0 0-.276.535c0 .202.099.395.276.534Zm12.328.204a1 1 0 0 0 .618-.204z"
    />
  </svg>
);

export default FileUploaderIcon;