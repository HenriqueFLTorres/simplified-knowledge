import { useEffect } from 'react';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import codeHikeStyles from '@code-hike/mdx/dist/index.css';

import { LanguageContext } from '@hooks/useLanguage';
import styles from './styles/tailwind.css';

export function links() {
  return [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: 'favicons/favicon32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: 'favicons/favicon16.png',
    },
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: codeHikeStyles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Simplified Knowledge Blog',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  useEffect(() => {
    const storageHasTheme = 'theme' in localStorage;
    const isSystemDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const storageTheme = localStorage.getItem('theme');
    const pageClass = document.documentElement.classList;

    if (storageHasTheme) {
      if (storageTheme === 'light') {
        pageClass.replace('dark', 'light');
        return localStorage.setItem('theme', 'light');
      }

      pageClass.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    if (isSystemDarkTheme) {
      pageClass.replace('light', 'dark');
      return localStorage.setItem('theme', 'dark');
    }

    pageClass.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  return (
    <html lang='en' className='dark'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <LanguageContext>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </LanguageContext>
      </body>
    </html>
  );
}
