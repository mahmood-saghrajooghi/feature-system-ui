import Toggle from './toggle';
import Save from './icons/save';
import Saved from './icons/saved';

const FeatureItem = ({
  children,
  active,
  onActiveChange,
  saved,
  onSaveChange,
}) => {
  return (
    <div className='flex items-center justify-between p-2 duration-100 rounded-md hover:bg-gray-800 focus-within:bg-gray-800 focus-within:ring-2 focus-within:ring-gray-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900'>
      <div className='flex items-center space-x-2 text-xs'>
        <Toggle checked={active} onChange={onActiveChange}>
          <Toggle.Button />
          <span>{children}</span>
        </Toggle>
      </div>
      <div className='flex align-center space-x-2'>
        <button
          onClick={onSaveChange}
          title='Persist'
          className={saved ? 'text-green-500' : ''}
        >
          {saved ? <Saved /> : <Save />}
        </button>
      </div>
    </div>
  );
};

export default FeatureItem;
