import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { selectCampers } from '../../redux/campersSlice';
import CampersItem from '../campers_item/CampersItem';
import css from './Campers_list.module.css';
import { selectFavoritesCampers } from '../../redux/favoriteSlice';
export default function Campers_list({ page }) {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const favoriteCampers = useSelector(selectFavoritesCampers);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  return (
    <ul>
      {campers.length ? (
        campers.map(result => {
          const isFavorite = favoriteCampers.some(c => c._id === result._id);

          return (
            <li className={css.item} key={result._id}>
              <CampersItem item={result} open={isFavorite} />
            </li>
          );
        })
      ) : (
        <p>No results found</p>
      )}
    </ul>
  );
}
