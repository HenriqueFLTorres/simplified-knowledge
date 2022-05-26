import { useLayoutEffect } from "react";
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
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Simplified Knowledge Blog",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  useLayoutEffect(() => {
    const storageHasTheme = "theme" in localStorage;
    const isSystemDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storageTheme = localStorage.getItem("theme");

    if (storageHasTheme) {
      if (storageTheme === "") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (isSystemDarkTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "");
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
