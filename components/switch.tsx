import styles from './switch.module.css';
import React from 'react';

// STOP! You should not have to change anything in this file to
// make it through the workshop. If tests are failing because of
// this switch not having properties set correctly, then the
// problem is probably in your implementation. Tip: Check
// your `render` method or the `getTogglerProps` method
// (if we've gotten to that part)

// this is here to fill in for the onChange handler
// we're not using onChange because it seems to behave
// differently in codesandbox and locally :shrug:
const noop = (v) => {
  console.log(v);

};

type Props = {
  on: boolean;
  className?: string;
  'aria-label'?: string;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

const Switch = (props: Props) => {
  const { on, className = '', 'aria-label': ariaLabel, onClick } = props;
  const btnClassName = [
    className,
    styles['toggle-btn'],
    on ? styles['toggle-btn-on'] : styles['toggle-btn-off'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label aria-label={ariaLabel || 'Toggle'} className={styles.label}>
      <input
        className={btnClassName}
        type='checkbox'
        checked={on}
        onChange={noop}
        onClick={onClick}
        data-testid='toggle-input'
      />
    </label>
  );
};

export { Switch };
