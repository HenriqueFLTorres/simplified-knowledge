import * as React from "react"

const IconBlack = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    style={{
      enableBackground: "new 0 0 1000 1000",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="t"
      gradientUnits="userSpaceOnUse"
      x1={76.751}
      y1={76.751}
      x2={730.555}
      y2={730.555}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#1e1e1e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#323232",
        }}
      />
    </linearGradient>
    <path
      d="M62.8 742.9V162.8c0-55.2 44.8-100 100-100h580.1v630.1c0 27.6-22.4 50-50 50H62.8z"
      style={{
        fill: "url(#t)",
      }}
    />
    <linearGradient
      id="u"
      gradientUnits="userSpaceOnUse"
      x1={1133.918}
      y1={661.925}
      x2={419.528}
      y2={258.139}
      gradientTransform="rotate(90 597.965 437.834)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#f89821",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#fed206",
        }}
      />
    </linearGradient>
    <path
      d="M937.2 257.1v580.1c0 55.2-44.8 100-100 100H257.1V307.1c0-27.6 22.4-50 50-50h630.1z"
      style={{
        fill: "url(#u)",
      }}
    />
  </svg>
)

export default IconBlack
