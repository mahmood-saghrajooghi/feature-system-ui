import { useState } from 'react';
import Copy from './icons/copy';
import Check from './icons/check';

const CodeBlock = ({ children }) => {
  const [renderCheck, setRenderCheck] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children);
    setRenderCheck(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setRenderCheck(false);
    }, 200);
  };

  return (
    <div
      className='text-xs relative p-4 bg-gray-800 group rounded-md'
      onMouseLeave={handleMouseLeave}
    >
      <pre className='whitespace-pre-wrap	break-all'>{children}</pre>
      <button
        className={`absolute right-2 top-2 border border-gray-600  bg-gray-700 flex items-center w-7 h-7 justify-center rounded-md duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 ${
          renderCheck ? 'border-green-500' : ''
        }`}
        onClick={copy}
      >
        {renderCheck ? (
          <Check className='text-green-500' />
        ) : (
          <Copy className='' />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
