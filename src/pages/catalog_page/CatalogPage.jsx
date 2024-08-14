import DocumentTitle from '../../components/DocumentTitle';
import css from './Catalog.module.css';
import Location from '../../components/location/Location';
import Filters from '../../components/filters/Filters';

export default function Catalog() {
  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>

      <div className={css.catalog}>
        <div>
          <Location />
          <Filters />
        </div>
        <div>List</div>
      </div>
    </>
  );
}
