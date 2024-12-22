import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { IBM_Plex_Mono, Inter } from 'next/font/google';
import { Notifications } from '@mantine/notifications';

import './globals.css';

import React, { ReactNode } from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { RoleProvider } from '@/context/RoleContext';
// import Welcome from '../components/Welcome/Welcome';
import { theme } from '../theme';

// export const metadata = {
//   title: 'Mantine Next.js template',
//   description: 'I am using Mantine with Next.js!',
// };

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Hamza Attig Dev',
  },
  icons: [
    {
      url: '/favicon.svg',
    },
  ],
};
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});
// className={`${inter.variable} ${plexMono.variable}`}
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <ColorSchemeScript />

        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <RoleProvider>
          <MantineProvider theme={theme}>
            {' '}
            <Notifications />
            {children}
          </MantineProvider>
        </RoleProvider>
      </body>
    </html>
  );
}
