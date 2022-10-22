const Illustration = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={404}
    height={395}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={121.932} height={121.932} rx={16.258} fill="#F2F2F2" />
    <rect
      x={282.068}
      width={121.932}
      height={121.932}
      rx={16.258}
      fill="#FEB906"
    />
    <rect
      x={282.068}
      y={272.314}
      width={121.932}
      height={121.932}
      rx={60.966}
      fill="#FEB906"
    />
    <defs>
      <linearGradient
        id="a"
        x1={20.936}
        y1={400.805}
        x2={93.329}
        y2={272.726}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F89821" />
        <stop offset={1} stopColor="#FED206" />
      </linearGradient>
    </defs>
    <rect
      y={272.314}
      width={121.932}
      height={121.932}
      rx={60.966}
      fill="url(#a)"
    />
    <path
      d="M152.821 67.062a1.22 1.22 0 0 0 0 2.439v-2.439Zm89.416 1.22-12.193-7.04v14.08l12.193-7.04ZM152.821 69.5h78.443v-2.439h-78.443v2.439ZM152.821 345.473l12.193 7.04v-14.08l-12.193 7.04Zm89.416 1.219a1.22 1.22 0 1 0 0-2.438v2.438Zm-78.442 0h78.442v-2.438h-78.442v2.438ZM344.253 165.014a1.219 1.219 0 1 0-2.438 0h2.438Zm-1.219 89.417 7.04-12.194h-14.08l7.04 12.194Zm-1.219-89.417v78.443h2.438v-78.443h-2.438Z"
      fill="#F2F2F2"
    />
  </svg>
);

export default Illustration;
