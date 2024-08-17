import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ variant, label, onHandleClick }) => {
  return (
    <button
      onClick={() => {
        onHandleClick();
      }}
      className={clsx(css[variant])}
    >
      {label}
    </button>
  );
};

export default Button;
