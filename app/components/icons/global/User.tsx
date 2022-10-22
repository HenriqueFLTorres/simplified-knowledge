const User = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    enableBackground="new 0 0 30 30"
    xmlSpace="preserve"
    {...props}
  >
    <path d="M15 15c3.9 0 7-3.2 7-7s-3.1-7-7-7-7 3.2-7 7 3.1 7 7 7zm0 3.5c-4.6 0-14 2.4-14 7V29h28v-3.5c0-4.6-9.4-7-14-7z" />
  </svg>
);

export default User;
