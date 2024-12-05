import { SVGProps } from "react"

const Attendance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={36}
    viewBox="0 0 32 36"
    fill="none"
    {...props}
  >
    <path
      fill="#2A61A0"
      d="m27.892 11.021 2.402-2.402a18.691 18.691 0 0 0-2.385-2.385l-2.402 2.402A15.16 15.16 0 0 0 16 5.286C7.593 5.286.775 12.104.775 20.511S7.575 35.736 16 35.736c8.424 0 15.225-6.818 15.225-15.225 0-3.57-1.252-6.868-3.333-9.49ZM16 32.369A11.833 11.833 0 0 1 4.159 20.528a11.833 11.833 0 0 1 11.84-11.841 11.833 11.833 0 0 1 11.842 11.841A11.833 11.833 0 0 1 16 32.369Z"
    />
    <path fill="#EF8D42" d="M14.137 12h3.489v10.15h-3.489z" />
    <path fill="#D64550" d="M10.965.264h10.15v3.489h-10.15z" />
  </svg>
)
export default Attendance
