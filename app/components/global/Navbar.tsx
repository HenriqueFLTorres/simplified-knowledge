import { useState } from 'react'

import { Link } from '@remix-run/react'
import { useDetectClickOutside } from 'react-detect-click-outside'

import { useEnglishLanguage } from '@hooks/useLanguage'

import {
  IconWhite,
  IconBlack,
  Moon,
  Sun,
  Language
} from '@components/icons/global'

const Navbar = () => {
  const [languageDropDown, setLanguageDropDown] = useState<Boolean>(false)

  const { setIsEnglish } = useEnglishLanguage()

  const closeDropDown = () => setLanguageDropDown(false)
  const dropDownRef = useDetectClickOutside({ onTriggered: closeDropDown })

  const themeHandler = () => {
    const page = document.querySelector('html')

    if (typeof localStorage !== 'undefined') {
      if (page?.className === 'light') {
        localStorage.setItem('theme', 'dark')
        return page?.classList.replace('light', 'dark')
      }

      localStorage.setItem('theme', 'light')
      page?.classList.replace('dark', 'light')
    }
  }

  const changeLanguage = (isEnglish: boolean) => {
    setIsEnglish(isEnglish)
    localStorage.setItem('isEnglishLanguage', String(isEnglish))
  }

  return (
    <nav className="z-50 flex h-20 w-full max-w-[1800px] select-none items-center justify-between px-8">
      <Link to="/">
        <div className="flex h-12 w-12 items-center justify-center">
          <IconWhite className="absolute h-10 w-10 opacity-0 transition-all duration-300 dark:opacity-100" />
          <IconBlack className="absolute h-10 w-10 opacity-100 transition-all duration-300 dark:opacity-0" />
        </div>
      </Link>

      <div className="flex w-32 flex-row items-center justify-between">
        <button
          onClick={themeHandler}
          className="clip-path-inset flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-neutral-300 transition-all duration-200 hover:border-neutral-600 hover:bg-[#2929292c] dark:border-neutral-800 hover:dark:border-neutral-500"
        >
          <Moon className="absolute w-6 translate-y-10 fill-neutral-800 drop-shadow-[0_0_5px_#404040] transition-transform dark:translate-y-0 dark:fill-neutral-100 dark:drop-shadow-[0_0_5px_#e8e8e8]" />
          <Sun className="absolute w-6 translate-y-0 fill-neutral-800 drop-shadow-[0_0_5px_#404040] transition-transform dark:-translate-y-10 dark:fill-neutral-100 dark:drop-shadow-[0_0_5px_#e8e8e8]" />
        </button>
        <div
          role={'menu'}
          onClick={() => setLanguageDropDown(!languageDropDown)}
          onKeyDown={() => setLanguageDropDown(!languageDropDown)}
          ref={dropDownRef}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded border border-neutral-300 transition-all duration-200 hover:border-neutral-600 hover:bg-[#2929292c] dark:border-neutral-800 hover:dark:border-neutral-500"
          tabIndex={0}
        >
          <Language className="absolute w-6 fill-neutral-800 drop-shadow-[0_0_5px_#404040] dark:fill-neutral-100 dark:drop-shadow-[0_0_5px_#e8e8e8]" />
          <div
            className={`absolute flex h-auto w-16 translate-y-[5rem] flex-col items-center justify-between divide-y divide-solid divide-neutral-300 rounded border border-neutral-200/20 bg-gradient-to-br from-[#cecece90] to-[#ababab4d] p-2 opacity-0 backdrop-blur-sm dark:divide-neutral-600 dark:from-[#272727e5] dark:to-[#1a1a1a9e] ${
              languageDropDown
                ? 'clip-path-inset pointer-events-auto opacity-100'
                : 'hide-top pointer-events-none opacity-0'
            } transition-all duration-200`}
          >
            <button
              onClick={() => changeLanguage(true)}
              className="w-full rounded-t py-1 text-center text-xl font-bold text-neutral-700 transition-colors duration-200 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage(false)}
              className="w-full rounded-b py-1 text-center text-xl font-bold text-neutral-700 transition-colors duration-200 hover:bg-neutral-400/50 dark:text-neutral-100 dark:hover:bg-neutral-600"
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
