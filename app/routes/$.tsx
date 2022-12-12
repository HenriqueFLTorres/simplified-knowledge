import { Link } from '@remix-run/react'

import { Navbar } from '@components/global'

type Props = {}

export function loader({ params }: any) {
  return params['*'] // "images/work/flyer.jpg"
}

const $ = (props: Props) => {
  return (
    <div className="h-screen w-full bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      <div className="flex h-screen w-full flex-col items-center justify-center text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        <h1 className="mb-4">Page not found!</h1>
        <Link to="/">
          <h3 className="font-regular text-3xl text-neutral-600 underline dark:text-neutral-400">
            Go to Home page
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default $
