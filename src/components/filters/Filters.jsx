// import Vehicle_equipment from '../vehicle_equipment/Vehicle_equipment';
// import Vehicle_type from '../vehicle_type/Vehicle_type';
// import Button from '../button/Button';
// export default function Filters() {
//   return (
//     <div>
//       <p>Filters</p>
//       <Vehicle_equipment />
//       <Vehicle_type />
//       <Button label="Search" />
//     </div>
//   );
// }
import { useState } from 'react';
import Vehicle_equipment from '../vehicle_equipment/Vehicle_equipment';
import Vehicle_type from '../vehicle_type/Vehicle_type';
import Button from '../button/Button';
import css from './Filters.module.css';

export default function Filters({ onSearch }) {
  const [location, setLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState('');

  const handleCheckboxChange = event => {
    const value = event.target.value;
    setSelectedEquipment(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const handleRadioChange = event => {
    setVehicleType(event.target.value);
  };

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch({
      location,
      selectedEquipment,
      vehicleType,
    });
  };

  return (
    <form className={css.filtersForm} onSubmit={handleSubmit}>
      <div className={css.location}>
        <p>Location</p>
        <input type="text" value={location} onChange={handleLocationChange} placeholder="City" />
      </div>
      <p>Filters</p>
      <Vehicle_equipment
        selectedEquipment={selectedEquipment}
        onCheckboxChange={handleCheckboxChange}
      />
      <Vehicle_type selectedVehicleType={vehicleType} onRadioChange={handleRadioChange} />
      <Button variant="search" label="Search" />
    </form>
  );
}
