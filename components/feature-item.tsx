import Toggle from './toggle';
import Save from './icons/save';
import Saved from './icons/saved';
import { useRef, useState } from 'react';
import Edit from './icons/edit';
import Check from './icons/check';

const FeatureItem = ({
  name,
  active,
  onActiveChange,
  saved,
  onSaveChange,
  onNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  return (
    <div className='FeatureItem'>
      <div className='FeatureItemInnerDiv'>
        <Toggle checked={active} onChange={onActiveChange}>
          <Toggle.Button />
          <span className='FeatureItemNameWrapper '>
            {isEditing ? (
              <input
                value={currentName}
                autoFocus
                onChange={(e) => setCurrentName(e.target.value)}
                className='FeatureItemInput'
              />
            ) : (
              <div className='FeatureItemNameDiv'>{name}</div>
            )}
            {isEditing ? (
              <button
                onClick={() => {
                  onNameChange(currentName);
                  setIsEditing(false);
                }}
                className='FeatureItemButton'
              >
                <Check width={12} />
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className='FeatureItemButton'
              >
                <Edit width={12} />
              </button>
            )}
          </span>
        </Toggle>
      </div>
      <div className='FeatureItemButtonGroup'>
        <button
          onClick={onSaveChange}
          title='Persist'
          className={saved ? 'FeatureItemButtonSaved' : ''}
        >
          {saved ? <Saved /> : <Save />}
        </button>
      </div>
    </div>
  );
};

export default FeatureItem;
