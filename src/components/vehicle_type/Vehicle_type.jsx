// import iconSprite from '../../icons/icons.svg';
// import css from './Vehicle_type.module.css';
// const Vehicle_type = () => {
//   return (
//     <>
//       <p>Vehicle type</p>
//       <div className={css.radio_group}>
//         <label className={css.radio_label}>
//           <input type="radio" name="vehicleType" value="Van" />
//           <span className={css.custom_radio}>
//             <div className={css.icons}>
//               <svg width="40" height="28">
//                 <use href={`${iconSprite}#icon-Van`}></use>
//               </svg>
//               <p className={css.icons_text}>Van</p>
//             </div>
//           </span>
//         </label>
//         <label className={css.radio_label}>
//           <input type="radio" name="vehicleType" value="Fully" />
//           <span className={css.custom_radio}>
//             <div className={css.icons}>
//               <svg width="40" height="28">
//                 <use href={`${iconSprite}#icon-Fully`}></use>
//               </svg>
//               <p className={css.icons_text}>
//                 Fully <br /> Integrated
//               </p>
//             </div>
//           </span>
//         </label>
//         <label className={css.radio_label}>
//           <input type="radio" name="vehicleType" value="Alcove" />
//           <span className={css.custom_radio}>
//             <div className={css.icons}>
//               <svg width="40" height="28">
//                 <use href={`${iconSprite}#icon-Alcove`}></use>
//               </svg>
//               <p className={css.icons_text}>Alcove</p>
//             </div>
//           </span>
//         </label>
//       </div>
//     </>
//   );
// };

// export default Vehicle_type;
import iconSprite from '../../icons/icons.svg';
import css from './Vehicle_type.module.css';

const Vehicle_type = ({ selectedVehicleType, onRadioChange }) => {
  return (
    <>
      <p>Vehicle type</p>
      <div className={css.radio_group}>
        <label className={css.radio_label}>
          <input
            type="radio"
            name="vehicleType"
            value="Van"
            checked={selectedVehicleType === 'Van'}
            onChange={onRadioChange}
          />
          <span className={css.custom_radio}>
            <div className={css.icons}>
              <svg width="40" height="28">
                <use href={`${iconSprite}#icon-Van`}></use>
              </svg>
              <p className={css.icons_text}>Van</p>
            </div>
          </span>
        </label>
        <label className={css.radio_label}>
          <input
            type="radio"
            name="vehicleType"
            value="Fully"
            checked={selectedVehicleType === 'Fully'}
            onChange={onRadioChange}
          />
          <span className={css.custom_radio}>
            <div className={css.icons}>
              <svg width="40" height="28">
                <use href={`${iconSprite}#icon-Fully`}></use>
              </svg>
              <p className={css.icons_text}>
                Fully <br /> Integrated
              </p>
            </div>
          </span>
        </label>
        <label className={css.radio_label}>
          <input
            type="radio"
            name="vehicleType"
            value="Alcove"
            checked={selectedVehicleType === 'Alcove'}
            onChange={onRadioChange}
          />
          <span className={css.custom_radio}>
            <div className={css.icons}>
              <svg width="40" height="28">
                <use href={`${iconSprite}#icon-Alcove`}></use>
              </svg>
              <p className={css.icons_text}>Alcove</p>
            </div>
          </span>
        </label>
      </div>
    </>
  );
};

export default Vehicle_type;
