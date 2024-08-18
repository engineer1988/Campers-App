import css from './Reviews.module.css';
import { useLocation } from 'react-router-dom';
import BookingForm from '../booking_form/BookingForm';
import { MdOutlineStarPurple500 } from 'react-icons/md';

export default function Reviews() {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <div className={css.reviews}>
      <ul className={css.reviews_left}>
        {item.reviews.length ? (
          item.reviews.map(result => {
            return (
              <li key={result._id}>
                <div className={css.first}>
                  <div className={css.squod}>
                    <div className={css.circle}>{result.reviewer_name.slice(0, 1)}</div>
                  </div>
                  <div className={css.name_star}>
                    <div className={css.reviewer_name}>{result.reviewer_name}</div>
                    <div>
                      {Array.from({ length: result.reviewer_rating }).map((_, index) => (
                        <MdOutlineStarPurple500 key={index} className={css.star} />
                      ))}
                      {Array.from({ length: 5 - result.reviewer_rating }).map((_, index) => (
                        <MdOutlineStarPurple500 key={index} className={css.star2} />
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <p className={css.comment}>{result.comment}</p>
                </div>
              </li>
            );
          })
        ) : (
          <p>No results found</p>
        )}
      </ul>

      <div className={css.reviews_right}>
        <BookingForm />
      </div>
    </div>
  );
}
