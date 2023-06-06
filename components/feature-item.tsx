import Toggle from './toggle';
import Save from './icons/save';
import Saved from './icons/saved';
import { useRef, useState } from 'react';
import Edit from './icons/edit';
import Check from './icons/check';
import { NEW_FEATURE_NAME } from '../utils/feature-system-reducer';
import Trash from './icons/trash';

const FeatureItem = ({
  name,
  active,
  onActiveChange,
  onNameChange,
  onRemove,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentName, setCurrentName] = useState(name);

  const editing = isEditing || name === NEW_FEATURE_NAME;
  return (
    <div className='FeatureItem'>
      <div className='FeatureItemInnerDiv'>
        <Toggle checked={active} onChange={onActiveChange}>
          <Toggle.Button />
          <span className='FeatureItemNameWrapper'>
            {editing ? (
              <input
                value={currentName}
                autoFocus
                onChange={(e) => setCurrentName(e.target.value)}
                className='FeatureItemInput'
              />
            ) : (
              <div className='FeatureItemNameDiv'>{name}</div>
            )}
            {editing ? (
              <button
                onClick={() => {
                  onNameChange(currentName);
                  setIsEditing(false);
                }}
                className='FeatureItemButton'
              >
                <Check />
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className='FeatureItemButton'
              >
                <Edit />
              </button>
            )}
          </span>
        </Toggle>
      </div>
      <div className='FeatureItemButtonGroup'>
        <button
          onClick={onRemove}
          title='Remove'
        >
          <Trash />
        </button>
      </div>
    </div>
  );
};

export default FeatureItem;
