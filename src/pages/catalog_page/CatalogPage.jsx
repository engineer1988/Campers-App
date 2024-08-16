import { useState, useEffect } from 'react';
import DocumentTitle from '../../components/DocumentTitle';
import css from './CatalogPage.module.css';
// import Location from '../../components/location/Location';
import Filters from '../../components/filters/Filters';
import Button from '../../components/button/Button';
import Campers_list from '../../components/campers_list/Campers_list';

export default function Catalog() {
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);

  const addPage = () => {
    setPage(page + 1);
  };

  const totalPages = 4;

  useEffect(() => {
    setShowBtn(totalPages && totalPages !== page);
  }, [page, totalPages]);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>

      <div className={css.catalog}>
        <div>
          {/* <Filters onSearch={handleSearch} /> */}
          <Filters />
        </div>
        <div>
          <Campers_list page={page} />
          {/* <Button variant="load" label="Load more" /> */}
          {showBtn && <Button variant="load" label="Load more" onAddPage={addPage} />}
        </div>
      </div>
    </>
  );
}
