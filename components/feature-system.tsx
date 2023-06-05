import { useEffect, useReducer, useState } from 'react';
import CodeBlock from './code-block';
import FeatureItem from './feature-item';
import Cross from './icons/cross';
import KeyTracker from './key-tracker';

import {
  reducer,
  initialState,
  EDIT_FEATURE_NAME,
  TOGGLE_FEATURE_ACTIVE,
  TOGGLE_FEATURE_SAVED,
  TOGGLE_HELP,
  TOGGLE_FEATURE_SYSTEM,
} from '../utils/feature-system-reducer';
import { KeyTrackerProvider } from '../utils/key-tracker-context';


const FeatureSystem = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.shiftKey && e.key === 'k') {
        dispatch({ type: TOGGLE_FEATURE_SYSTEM });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  let content;

  if (!state.isFeatureSystemOpen) {
    content = (
      <div className='Position'>
        <KeyTracker dispatch={dispatch} />
      </div>
    );
  } else {
    content = (
      <div className='FeatureSystem'>
        <div className='Container'>
          <button
            className='Button'
            onClick={() => dispatch({ type: TOGGLE_FEATURE_SYSTEM })}
          >
            <Cross />
          </button>
          <div className='Section1'>
            <p>Feature System</p>
            {state.features.map(({ id, name, active, saved }) => (
              <FeatureItem
                key={id}
                name={name}
                active={active}
                onNameChange={(newFeatureName) =>
                  dispatch({
                    type: EDIT_FEATURE_NAME,
                    featureName: name,
                    newFeatureName,
                  })
                }
                onActiveChange={() =>
                  dispatch({ type: TOGGLE_FEATURE_ACTIVE, featureName: name })
                }
                saved={saved}
                onSaveChange={() =>
                  dispatch({ type: TOGGLE_FEATURE_SAVED, featureName: name })
                }
              />
            ))}
          </div>
          <div className='Section2'>
            <div className='Flex'>
              <button
                onClick={() => dispatch({ type: TOGGLE_HELP })}
                className='Button2'
              >
                {state.shouldShowHelp ? 'Hide Help' : 'How to use in code?'}
              </button>

              <KeyTracker dispatch={dispatch} isRenderedInModal />
            </div>
            {state.shouldShowHelp && (
              <>
                <p>Use in legacy:</p>
                <CodeBlock>useClientFeatureFlag('feature-name')</CodeBlock>
                <p>Use in react:</p>
                <CodeBlock>
                  agreementHelpers.isClientFeatureFlagEnabled('feature-name')
                </CodeBlock>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <KeyTrackerProvider>{content}</KeyTrackerProvider>;
};

export default FeatureSystem;
