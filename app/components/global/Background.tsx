import grainImage from 'public/images/Noise.png'

const Background = () => (
  <>
    <img
      src={grainImage}
      alt=""
      className={'fixed top-0 z-[-1] h-screen w-screen opacity-10'}
    />
    <div className="fixed top-0 -z-30 h-screen w-screen bg-neutral-100 dark:bg-neutral-900"></div>
  </>
)

export default Background
