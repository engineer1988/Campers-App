import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectError, selectLoading, selectCampers } from '../../redux/campersSlice';
// import Loader from './loader/Loader';
import CampersItem from '../campers_item/CampersItem';
import css from './Campers_list.module.css';

export default function Campers_list({ page }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);
  return (
    <ul>
      {campers.length ? (
        campers.map((result, index) => (
          <li className={css.item} key={result._id || index}>
            <CampersItem item={result} />
          </li>
        ))
      ) : (
        <p>No results found</p>
      )}
    </ul>
  );
}
