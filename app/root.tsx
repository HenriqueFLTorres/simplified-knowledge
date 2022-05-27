import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/tailwind.css";
import { LanguageProvider } from "./utils/useLanguage";

export function links() {
  return [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "favicons/favicon32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "favicons/favicon16.png",
    },
    { rel: "stylesheet", href: styles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Simplified Knowledge Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  useEffect(() => {
    const storageHasTheme = "theme" in localStorage;
    const isSystemDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storageTheme = localStorage.getItem("theme");

    if (storageHasTheme) {
      if (storageTheme === "light") {
        document.documentElement.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
      }
    } else {
      if (isSystemDarkTheme) {
        document.documentElement.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <LanguageProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </LanguageProvider>
      </body>
    </html>
  );
}
