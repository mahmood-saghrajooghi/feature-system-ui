

export const TOGGLE_FEATURE_ACTIVE = 'TOGGLE_FEATURE_ACTIVE';
export const TOGGLE_FEATURE_SAVED = 'TOGGLE_FEATURE_SAVED';
export const EDIT_FEATURE_NAME = 'EDIT_FEATURE_NAME';
export const TOGGLE_HELP = 'TOGGLE_HELP';
export const TOGGLE_FEATURE_SYSTEM = 'TOGGLE_FEATURE_SYSTEM';

const initialFeatures = [
  { id: 1, name: 'feature-1', active: false, saved: false },
  { id: 2, name: 'feature-2', active: false, saved: false },
];

export const initialState = {
  isFeatureSystemOpen: false,
  shouldShowHelp: false,
  features: initialFeatures,
};

type State = typeof initialState;
export type Action =
  | { type: typeof TOGGLE_FEATURE_ACTIVE; featureName: string }
  | { type: typeof TOGGLE_FEATURE_SAVED; featureName: string }
  | {
      type: typeof EDIT_FEATURE_NAME;
      featureName: string;
      newFeatureName: string;
    }
  | { type: typeof TOGGLE_HELP }
  | { type: typeof TOGGLE_FEATURE_SYSTEM };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case TOGGLE_FEATURE_ACTIVE:
      return {
        ...state,
        features: state.features.map((feature) =>
          feature.name === action.featureName
            ? { ...feature, active: !feature.active }
            : feature
        ),
      };
    case TOGGLE_FEATURE_SAVED:
      return {
        ...state,
        features: state.features.map((feature) =>
          feature.name === action.featureName
            ? { ...feature, saved: !feature.saved }
            : feature
        ),
      };
    case EDIT_FEATURE_NAME:
      return {
        ...state,
        features: state.features.map((feature) =>
          feature.name === action.featureName
            ? { ...feature, name: action.newFeatureName }
            : feature
        ),
      };
    case TOGGLE_HELP:
      return {
        ...state,
        shouldShowHelp: !state.shouldShowHelp,
      };
    case TOGGLE_FEATURE_SYSTEM:
      return {
        ...state,
        isFeatureSystemOpen: !state.isFeatureSystemOpen,
      };
    default:
      return state;
  }
}
