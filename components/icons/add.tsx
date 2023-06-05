const Add = ({
  className,
  width,
}: {
  className?: string;
  width?: string | number;
}) => (
  <svg
    aria-hidden='true'
    height='16'
    viewBox='0 0 16 16'
    version='1.1'
    width={width || '14'}
    className={className}
  >
    <path
      fill='currentColor'
      d='M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z'
    ></path>
  </svg>
);

export default Add;
