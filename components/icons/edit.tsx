const Edit = ({
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
    width={width || '16'}
    className={className}
  >
    <path
      fill='currentColor'
      d='M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z'
    ></path>
  </svg>
);

export default Edit;
