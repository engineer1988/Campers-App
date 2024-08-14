import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/home_page/HomePage'));
const CatalogPage = lazy(() => import('./pages/catalog_page/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/favorites_page/FavoritesPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
export default App;
