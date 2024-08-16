import DocumentTitle from '../../components/DocumentTitle';
import FavoritesCamperList from '../../components/favorites_camper_list/FavoritesCamperList';
export default function FavoritesPage() {
  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>

      <div>
        <FavoritesCamperList />
      </div>
    </>
  );
}
