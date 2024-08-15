// import DocumentTitle from '../../components/DocumentTitle';
// import css from './Catalog.module.css';
// import Location from '../../components/location/Location';
// import Filters from '../../components/filters/Filters';

// export default function Catalog() {
//   return (
//     <>
//       <DocumentTitle>Catalog</DocumentTitle>

//       <div className={css.catalog}>
//         <div>
//           <Location />
//           <Filters />
//         </div>
//         <div>List</div>
//       </div>
//     </>
//   );
// }
import DocumentTitle from '../../components/DocumentTitle';
import css from './CatalogPage.module.css';
// import Location from '../../components/location/Location';
import Filters from '../../components/filters/Filters';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectError, selectLoading, selectCampers } from '../../redux/campersSlice';
// import Loader from './loader/Loader';
import CampersItem from '../../components/campers_item/CampersItem';

export default function Catalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>

      <div className={css.catalog}>
        <div>
          {/* <Filters onSearch={handleSearch} /> */}
          <Filters />
        </div>
        <div>
          <ul>
            {campers.length ? (
              campers.map(result => (
                <li className={css.item} key={result.id}>
                  <CampersItem item={result} />
                </li>
              ))
            ) : (
              <p>No results found</p>
            )}
          </ul>{' '}
        </div>
      </div>
    </>
  );
}
