// import iconSprite from '../../icons/icons.svg';
// import css from './Vehicle_equipment.module.css';
// import { TbToolsKitchen2 } from 'react-icons/tb';
// import { TbAutomaticGearbox } from 'react-icons/tb';
// import { FaShower } from 'react-icons/fa6';
// import { PiTelevisionSimpleBold } from 'react-icons/pi';

// const Vehicle_equipment = () => {
//   return (
//     <>
//       <p>Vehicle equipment</p>
//       <div className={css.checkbox_group}>
//         <label className={css.checkbox_label}>
//           <input type="checkbox" name="vehicleEquipment" value="AC" />
//           <span className={css.custom_checkbox}>
//             <div className={css.icons}>
//               <svg width="32" height="32">
//                 <use href={`${iconSprite}#icon-AC`}></use>
//               </svg>
//               <p className={css.icons_text}>AC</p>
//             </div>
//           </span>
//         </label>
//         <label className={css.checkbox_label}>
//           <input type="checkbox" name="vehicleEquipment" value="Automatic" />
//           <span className={css.custom_checkbox}>
//             <div className={css.icons}>
//               <svg width="32" height="32">
//                 <TbAutomaticGearbox />
//               </svg>
//               <p className={css.icons_text}>Automatic</p>
//             </div>
//           </span>
//         </label>
//         <label className={css.checkbox_label}>
//           <input type="checkbox" name="vehicleEquipment" value="Kitchen" />
//           <span className={css.custom_checkbox}>
//             <div className={css.icons}>
//               <svg width="32" height="32">
//                 <TbToolsKitchen2 />
//               </svg>
//               <p className={css.icons_text}>Kitchen</p>
//             </div>
//           </span>
//         </label>
//         <label className={css.checkbox_label}>
//           <input type="checkbox" name="vehicleEquipment" value="TV" />
//           <span className={css.custom_checkbox}>
//             <div className={css.icons}>
//               <svg width="32" height="32">
//                 <PiTelevisionSimpleBold />{' '}
//               </svg>
//               <p className={css.icons_text}>TV</p>
//             </div>
//           </span>
//         </label>
//         <label className={css.checkbox_label}>
//           <input type="checkbox" name="vehicleEquipment" value="Shower/WC" />
//           <span className={css.custom_checkbox}>
//             <div className={css.icons}>
//               <svg width="32" height="32">
//                 <FaShower />
//               </svg>
//               <p className={css.icons_text}>Shower/WC</p>
//             </div>
//           </span>
//         </label>
//       </div>
//     </>
//   );
// };

// export default Vehicle_equipment;
import iconSprite from '../../icons/icons.svg';
import css from './Vehicle_equipment.module.css';
import { TbToolsKitchen2, TbAutomaticGearbox } from 'react-icons/tb';
import { FaShower } from 'react-icons/fa6';
import { PiTelevisionSimpleBold } from 'react-icons/pi';

const Vehicle_equipment = ({ selectedEquipment, onCheckboxChange }) => {
  const equipmentOptions = [
    { value: 'AC', icon: `${iconSprite}#icon-AC`, label: 'AC' },
    { value: 'Automatic', icon: <TbAutomaticGearbox />, label: 'Automatic' },
    { value: 'Kitchen', icon: <TbToolsKitchen2 />, label: 'Kitchen' },
    { value: 'TV', icon: <PiTelevisionSimpleBold />, label: 'TV' },
    { value: 'Shower/WC', icon: <FaShower />, label: 'Shower/WC' },
  ];

  return (
    <>
      <p>Vehicle equipment</p>
      <div className={css.checkbox_group}>
        {equipmentOptions.map(equipment => (
          <label className={css.checkbox_label} key={equipment.value}>
            <input
              type="checkbox"
              name="vehicleEquipment"
              value={equipment.value}
              checked={selectedEquipment.includes(equipment.value)}
              onChange={onCheckboxChange}
            />
            <span className={css.custom_checkbox}>
              <div className={css.icons}>
                <svg className={css.svg} width="32" height="32">
                  {typeof equipment.icon === 'string' ? (
                    <use href={equipment.icon}></use>
                  ) : (
                    equipment.icon
                  )}
                </svg>
                <p className={css.icons_text}>{equipment.label}</p>
              </div>
            </span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Vehicle_equipment;
