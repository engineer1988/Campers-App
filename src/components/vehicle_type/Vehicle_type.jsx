import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa'; // Пример иконок
import css from './Vehicle_type.module.css';
const Vehicle_type = () => {
  return (
    <>
      <p>Vehicle type</p>
      <div className={css.radio_group}>
        <label className={css.radio_label}>
          <input type="radio" name="platform" value="apple" />
          <span className={css.custom_radio}>
            <FaApple />
          </span>
        </label>
        <label className={css.radio_label}>
          <input type="radio" name="platform" value="android" />
          <span className={css.custom_radio}>
            <FaAndroid />
          </span>
        </label>
        <label className={css.radio_label}>
          <input type="radio" name="platform" value="windows" />
          <span className={css.custom_radio}>
            <FaWindows />
          </span>
        </label>
      </div>
    </>
  );
};

export default Vehicle_type;
