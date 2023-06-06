import { ReactNode, useState } from 'react';
import Copy from './icons/copy';
import Check from './icons/check';

const CodeBlock = ({ children, strToCopy } : { children: ReactNode, strToCopy: string }) => {
  const [renderCheck, setRenderCheck] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(strToCopy);
    setRenderCheck(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setRenderCheck(false);
    }, 200);
  };

  return (
    <div
      className='CodeBlock'
      onMouseLeave={handleMouseLeave}
    >
      <pre className='Pre'>{children}</pre>
      <button
        className={`Button ${renderCheck ? 'BorderGreen' : ''}`}
        onClick={copy}
      >
        {renderCheck ? (
          <Check className='CheckIcon' />
        ) : (
          <Copy />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
