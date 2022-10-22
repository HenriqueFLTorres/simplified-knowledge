import grainImage from "public/images/Noise.png";

const Background = () => (
  <>
    <img
      src={grainImage}
      alt=""
      className={"fixed z-[-1] top-0 opacity-10 w-screen h-screen"}
    />
    <div className="fixed top-0 -z-30 w-screen h-screen bg-neutral-100 dark:bg-neutral-900"></div>
  </>
);

export default Background;
