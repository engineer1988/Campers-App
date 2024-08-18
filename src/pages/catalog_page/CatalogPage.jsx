import { useState, useEffect } from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import css from './CatalogPage.module.css';
import Filters from '../../components/filters/Filters';
import Button from '../../components/button/Button';
import Campers_list from '../../components/campers_list/Campers_list';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';

export default function Catalog() {
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const campers = useSelector(selectCampers);

  const addPage = () => {
    setPage(page + 1);
  };

  const totalPages = 4;

  useEffect(() => {
    setShowBtn(totalPages && totalPages !== page && campers.length <= 12);
  }, [page, totalPages, campers.length]);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>

      <div className={css.catalog}>
        <div>
          <Filters />
        </div>
        <div>
          <Campers_list page={page} />
          {showBtn && <Button variant="load" label="Load more" onHandleClick={addPage} />}
        </div>
      </div>
    </>
  );
}
