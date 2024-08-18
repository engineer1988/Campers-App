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
        <label className={css.booking_label}>Location</label>
        <input
          className={css.booking_input}
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="City"
        />
      </div>
      <p className={css.filters}>Filters</p>
      <Vehicle_equipment
        selectedEquipment={selectedEquipment}
        onCheckboxChange={handleCheckboxChange}
      />
      <Vehicle_type selectedVehicleType={vehicleType} onRadioChange={handleRadioChange} />
      <Button variant="search" label="Search" />
    </form>
  );
}
