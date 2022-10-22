import { Link } from "@remix-run/react";

import { Navbar } from "@components/global";

type Props = {};

export function loader({ params }: any) {
  return params["*"]; // "images/work/flyer.jpg"
}

const $ = (props: Props) => {
  return (
    <div className="w-full h-screen bg-neutral-100 dark:bg-neutral-800">
      <Navbar />
      <div className="w-full flex-col h-screen flex justify-center items-center font-bold text-4xl dark:text-neutral-200 text-neutral-800">
        <h1 className="mb-4">Page not found!</h1>
        <Link to="/">
          <h3 className="underline text-3xl dark:text-neutral-400 text-neutral-600 font-regular">
            Go to Home page
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default $;
