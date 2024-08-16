import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ variant, label, onAddPage }) => {
  return (
    <button
      onClick={() => {
        onAddPage();
      }}
      className={clsx(css[variant])}
    >
      {label}
    </button>
  );
};

export default Button;
