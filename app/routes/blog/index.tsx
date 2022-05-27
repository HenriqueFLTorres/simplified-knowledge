import React from 'react'
import { Link } from '@remix-run/react'

import Navbar from '~/components/Navbar'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="w-full mx-auto flex align-center justify-center flex-col text-center pt-40">
        <h1 className="mb-2 font-normal">Website under construction! Coming Soon ^-^</h1>
        <Link to="/"><h3 className="underline text-3xl dark:text-neutral-400 text-neutral-600 font-regular">Go to Home page</h3></Link>
    </div>
  )
}

export default index