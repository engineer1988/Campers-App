import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.home_page}>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 className={css.first_title}>
          effective solutions <span>for</span> your travels
        </h1>
      </div>
    </div>
  );
}
