import * as React from "react"

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Zm1-8.251V7a1 1 0 0 0-2 0v5a1.006 1.006 0 0 0 .118.472l1.5 2.799a1 1 0 0 0 1.764-.944Z" />
  </svg>
)

export default SvgComponent