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
      <p className={css.vehicle}>Vehicle equipment</p>
      <div className={css.line}></div>
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
