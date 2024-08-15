import css from './Button.module.css';

const Button = ({ label }) => {
  return <button className={css.custom_button}>{label}</button>;
};

export default Button;
