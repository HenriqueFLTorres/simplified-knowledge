import { Outlet } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import { useLocation } from 'react-router-dom'

import { Navbar, Background } from '@components/global'
import generateSocialPreview from '@utils/generateSocialPreview'

export const meta: MetaFunction = () => ({
  ...generateSocialPreview({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    url: `https://simplifiedknowledge.vercel.app/${useLocation().pathname}`
  })
})

const Blog = () => {
  return (
    <>
      <Background />
      <Navbar />
      <article className="prose prose-neutral mx-auto py-40 px-2 dark:prose-invert lg:prose-xl">
        <Outlet />
      </article>
    </>
  )
}

export default Blog
