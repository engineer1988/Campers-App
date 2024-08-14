import { Navigation } from '../navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
