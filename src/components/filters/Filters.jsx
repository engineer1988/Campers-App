import Vehicle_equipment from '../vehicle_equipment/Vehicle_equipment';
import Vehicle_type from '../vehicle_type/Vehicle_type';

export default function Filters() {
  return (
    <div>
      <p>Filters</p>
      <Vehicle_equipment />
      <Vehicle_type />
    </div>
  );
}
