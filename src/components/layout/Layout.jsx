import { Suspense } from 'react';
import { AppBar } from '../app__bar/AppBar';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
