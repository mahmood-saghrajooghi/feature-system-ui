export const TOGGLE_FEATURE_ACTIVE = 'TOGGLE_FEATURE_ACTIVE';
export const EDIT_FEATURE_NAME = 'EDIT_FEATURE_NAME';
export const TOGGLE_HELP = 'TOGGLE_HELP';
export const TOGGLE_FEATURE_SYSTEM = 'TOGGLE_FEATURE_SYSTEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE ';
export const ADD_FEATURE = 'ADD_FEATURE';

export const NEW_FEATURE_NAME = 'new feature';

const initialFeatures = [
  { id: 1, name: 'feature-1', active: false, saved: false },
  { id: 2, name: 'feature-2', active: false, saved: false },
];

export const initialState = {
  isFeatureSystemOpen: true,
  shouldShowHelp: true,
  features: initialFeatures,
};

type State = typeof initialState;
export type Action =
  | { type: typeof TOGGLE_FEATURE_ACTIVE; featureName: string }
  | { type: typeof REMOVE_FEATURE; id: number }
  | {
      type: typeof EDIT_FEATURE_NAME;
      featureName: string;
      newFeatureName: string;
    }
  | { type: typeof TOGGLE_HELP }
  | { type: typeof TOGGLE_FEATURE_SYSTEM }
  | { type: typeof ADD_FEATURE; featureName: string };

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
    case REMOVE_FEATURE:
      return {
        ...state,
        features: state.features.filter((feature) => feature.id !== action.id),
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
    case ADD_FEATURE:
      return {
        ...state,
        features: [
          ...state.features,
          {
            id: state.features.length + 1,
            name: action.featureName,
            active: false,
            saved: false,
          },
        ],
      };
    default:
      return state;
  }
}
