import { type Dispatch } from 'react';
import { Action } from '../utils/feature-system-reducer';
import { useKeyTracker } from '../utils/key-tracker-context';

const KeyTracker = ({
  className,
  isRenderedInModal,
}: {
  dispatch: Dispatch<Action>;
  className?: string;
  isRenderedInModal?: boolean;
}) => {
  const keyStatus = useKeyTracker();

  const shouldRender = keyStatus.meta || keyStatus.shift;

  if (!isRenderedInModal && !shouldRender) return null;

  return (
    <div className={`KeyTracker ${className}`}>
      <kbd className={`Key ${keyStatus.meta ? 'Active' : ''}`}>cmd</kbd> +{' '}
      <kbd className={`Key ${keyStatus.shift ? 'Active' : ''}`}>shift</kbd> +{' '}
      <kbd className={`Key ${keyStatus.k ? 'Active' : ''}`}>k</kbd>
    </div>
  );
};

export default KeyTracker;
