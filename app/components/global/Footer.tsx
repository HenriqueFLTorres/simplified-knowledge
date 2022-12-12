const Footer = () => (
  <div className="mt-20 hidden h-20 w-full flex-row items-center justify-center bg-neutral-800 px-32 text-neutral-400 sm:flex lg:justify-between">
    <div className="flex gap-10">
      <a
        href="https://www.linkedin.com/in/henriquefltorres/"
        target="_blank"
        className="font-semibold"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/HenriqueFLTorres"
        target="_blank"
        className="font-semibold"
        rel="noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://htportfolio.vercel.app/"
        target="_blank"
        className="font-semibold"
        rel="noreferrer"
      >
        Portfolio
      </a>
      <a
        href="mailto:henriquefltorres@gmail.com"
        target="_blank"
        className="font-semibold"
        rel="noreferrer"
      >
        Email
      </a>
    </div>
    <div className="hidden lg:inline">
      Designed and Developed by{' '}
      <a
        href="https://github.com/HenriqueFLTorres"
        target="_blank"
        className="font-semibold"
        rel="noreferrer"
      >
        Henrique Tores
      </a>
    </div>
  </div>
)

export default Footer
