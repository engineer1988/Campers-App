import { useSelector } from 'react-redux';
import { selectFavoritesCampers } from '../../redux/favoriteSlice';
import CampersItem from '../campers_item/CampersItem';
import css from './FavoritesCamperList.module.css';

export default function FavoritesCamperList() {
  const campers = useSelector(selectFavoritesCampers);
  console.log(campers);
  return (
    <ul>
      {campers.length ? (
        campers.map(result => (
          <li className={css.item} key={result._id}>
            <CampersItem item={result} />
          </li>
        ))
      ) : (
        <p>No results found</p>
      )}
    </ul>
  );
}
