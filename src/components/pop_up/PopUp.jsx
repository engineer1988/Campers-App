import { useState } from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import css from './PopUp.module.css';
import { Link, Outlet } from 'react-router-dom';

export default function PopUp({ item }) {
  const [activeLink, setActiveLink] = useState(null); 

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <>
      <div className={css.div_right_first}>
        <span className={css.name_text}>{item.name}</span>
      </div>
      <div className={css.div_right_second}>
        <span className={css.rating}>
          <MdOutlineStarPurple500 className={css.star} />
          {item.rating} ({item.reviews.length} <span>Reviews</span>)
        </span>
        <span className={css.rating}>
          <CiLocationOn className={css.location} />
          {item.location}
        </span>
      </div>
      <div className={css.price_icon}>
        <span className={css.name_text}>€{item.price}.00</span>
      </div>
      <div className={css.fotos}>
        <div className={css.div_image}>
          <img className={css.image} src={item.gallery[0]} alt="camper view" />
        </div>
        <div className={css.div_image}>
          <img className={css.image} src={item.gallery[1]} alt="camper view" />
        </div>
        <div className={css.div_image}>
          <img className={css.image} src={item.gallery[2]} alt="camper view" />
        </div>
      </div>
      <p className={css.description}>{item.description}</p>

      <ul className={css.list}>
        <li className={css.list_item} onClick={() => handleLinkClick('features')}>
          <Link
            className={css.link}
            to="features"
            state={{ item }} 
            style={{ color: activeLink === 'features' ? 'black' : 'inherit' }}
          >
            Features
          </Link>
        </li>
        <li className={css.list_item} onClick={() => handleLinkClick('reviews')}>
          <Link
            className={css.link}
            to="reviews"
            state={{ item }} 
            style={{ color: activeLink === 'reviews' ? 'black' : 'inherit' }}
          >
            Reviews
          </Link>
        </li>

        {activeLink && (
          <div
            className={css.slider}
            style={{
              transform: `translateX(${activeLink === 'features' ? 0 : 120}px)`,
            }}
          />
        )}
      </ul>

      {activeLink && <Outlet />}
    </>
  );
}
