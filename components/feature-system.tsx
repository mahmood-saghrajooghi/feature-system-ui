import { useEffect, useReducer, useState } from 'react';
import CodeBlock from './code-block';
import FeatureItem from './feature-item';
import Cross from './icons/cross';
import Add from './icons/add';
import KeyTracker from './key-tracker';
import SyntaxHighlighting from './syntax-highlighting';

import {
  reducer,
  initialState,
  EDIT_FEATURE_NAME,
  TOGGLE_FEATURE_ACTIVE,
  TOGGLE_FEATURE_SAVED,
  TOGGLE_HELP,
  TOGGLE_FEATURE_SYSTEM,
  ADD_FEATURE,
  NEW_FEATURE_NAME,
} from '../utils/feature-system-reducer';
import { KeyTrackerProvider } from '../utils/key-tracker-context';

import syntaxStyles from './syntax-highlighting.module.css';

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
          <p className='Title'>Feature System</p>
          <div className='Section1'>
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
          <div className='AddFeatureButtonContainer'>
            <button
              className='AddFeatureButton'
              onClick={() =>
                dispatch({ type: ADD_FEATURE, featureName: NEW_FEATURE_NAME })
              }
            >
              <Add />
              <span>Add Feature</span>
            </button>
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
                <CodeBlock strToCopy="import * as agreementHelpers from 'src/app/redux_store/helpers/agreement';">
                  <SyntaxHighlighting className={syntaxStyles.pl_k}>
                    import
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_c1}>
                    *
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_k}>
                    as
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_s1}>
                    agreementHelpers
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_k}>
                    from
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_s}>
                    'src/app/redux_store/helpers/agreement'
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    ;
                  </SyntaxHighlighting>
                </CodeBlock>
                <CodeBlock strToCopy="agreementHelpers.isClientFeatureFlagEnabled('feature-name');">
                  <SyntaxHighlighting className={syntaxStyles.pl_s1}>
                    agreementHelpers
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    .
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_en}>
                    isClientFeatureFlagEnabled
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    (
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_s}>
                    'feature-name'
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    )
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    ;
                  </SyntaxHighlighting>
                </CodeBlock>
                <p>Use in react:</p>
                <CodeBlock strToCopy="import useClientFeatureFlag from 'hooks/use-client-feature-flag';">
                  <SyntaxHighlighting className={syntaxStyles.pl_k}>
                    import
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_s1}>
                    useClientFeatureFlag
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_k}>
                    from
                  </SyntaxHighlighting>{' '}
                  <SyntaxHighlighting className={syntaxStyles.pl_s}>
                    'hooks/use-client-feature-flag'
                  </SyntaxHighlighting>
                </CodeBlock>

                <CodeBlock strToCopy="useClientFeatureFlag('feature-name');">
                  <SyntaxHighlighting className={syntaxStyles.pl_en}>
                    useClientFeatureFlag
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    (
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_s}>
                    'feature-name'
                  </SyntaxHighlighting>
                  <SyntaxHighlighting className={syntaxStyles.pl_kos}>
                    )
                  </SyntaxHighlighting>
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
