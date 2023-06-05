import styles from './syntax-highlighting.module.css';

const SyntaxHighlighting = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <span className={`${styles.SyntaxHighlighting} ${className}`}>
      {children}
    </span>
  );
};

export default SyntaxHighlighting;
