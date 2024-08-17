import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Features from './components/features/Features';
import Reviews from './components/reviews_/Reviews';

const HomePage = lazy(() => import('./pages/home_page/HomePage'));
const CatalogPage = lazy(() => import('./pages/catalog_page/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/favorites_page/FavoritesPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/favorites" element={<FavoritesPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
export default App;
