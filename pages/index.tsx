import { useReducer, useState } from 'react';
import CodeBlock from '../components/code-block';
import Toggle from '../components/toggle';
import Save from '../components/icons/save';
import Saved from '../components/icons/saved';
import FeatureItem from '../components/feature-item';

const TOGGLE_FEATURE_ACTIVE = 'TOGGLE_FEATURE_ACTIVE';
const TOGGLE_FEATURE_SAVED = 'TOGGLE_FEATURE_SAVED';
const TOGGLE_HELP = 'TOGGLE_HELP';

const initialState = {
  shouldShowHelp: false,
  features: {
    'feature-1': {
      active: false,
      saved: false,
    },
    'feature-2': {
      active: false,
      saved: false,
    },
  },
};

type State = typeof initialState;
type Action =
  | { type: typeof TOGGLE_FEATURE_ACTIVE; featureName: string }
  | { type: typeof TOGGLE_FEATURE_SAVED; featureName: string }
  | { type: typeof TOGGLE_HELP };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TOGGLE_FEATURE_ACTIVE:
      return {
        ...state,
        features: {
          ...state.features,
          [action.featureName]: {
            ...state.features[action.featureName],
            active: !state.features[action.featureName].active,
          },
        },
      };
    case TOGGLE_FEATURE_SAVED:
      return {
        ...state,
        features: {
          ...state.features,
          [action.featureName]: {
            ...state.features[action.featureName],
            saved: !state.features[action.featureName].saved,
          },
        },
      };
    case TOGGLE_HELP:
      return {
        ...state,
        shouldShowHelp: !state.shouldShowHelp,
      };
    default:
      return state;
  }
}
const IndexPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='min-h-screen relative '>
      <div className='absolute bottom-1 right-1 w-96 bg-gray-900 text-gray-100 p-4 space-y-2 rounded-md'>
        <div className='space-y-2 border-b border-gray-600 pb-2'>
          <p>Feature System</p>
          {Object.entries(state.features).map(([featureName, feature]) => (
            <FeatureItem
              key={featureName}
              active={feature.active}
              onActiveChange={() =>
                dispatch({ type: TOGGLE_FEATURE_ACTIVE, featureName })
              }
              saved={feature.saved}
              onSaveChange={() =>
                dispatch({ type: TOGGLE_FEATURE_SAVED, featureName })
              }
            >{`${featureName} feature`}</FeatureItem>
          ))}
        </div>
        <div className='space-y-2'>
          <button
            onClick={() => dispatch({ type: TOGGLE_HELP })}
            className='text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-900'
          >
            {state.shouldShowHelp ? 'Hide Help' : 'How to use in code?'}
          </button>
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
};

export default IndexPage;
