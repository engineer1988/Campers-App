import css from './CampersItem.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TbToolsKitchen2, TbAutomaticGearbox } from 'react-icons/tb';

import Button from '../button/Button';

export default function CampersItem({ item }) {
  return (
    <>
      <div className={css.div_item}>
        <div className={css.div_image}>
          <img className={css.image} src={item.gallery[0]} alt="camper view" />
        </div>
        <div className={css.div_right}>
          <div className={css.div_right_first}>
            <span className={css.name_text}>{item.name}</span>
            <div className={css.price_icon}>
              <span className={css.name_text}>€{item.price}.00</span>
              <button className={css.button}>
                <FaRegHeart className={css.fa} />
              </button>
            </div>
          </div>
          <div className={css.div_right_second}>
            <span className={css.rating}>
              <MdOutlineStarPurple500 className={css.star} />
              {item.rating}({item.reviews.length} <span>Reviews</span>)
            </span>
            <span className={css.rating}>
              <CiLocationOn className={css.location} />
              {item.location}
            </span>
          </div>
          <div className={css.div_right_third}>
            <p className={css.div_right_third_text}>{item.description.slice(0, 75)}...</p>
          </div>
          <div className={css.div_right_forth}>
            {/* ============================= 1 =========================== */}
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
            {/* =========================== 2 ============================ */}
            <div className={css.kitchen}>
              <TbAutomaticGearbox className={css.fa} />
              {item.transmission}
              {/* <span>adults</span> */}
            </div>
            {/* ========================== 3 ============================= */}
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
            {/* =========================== 4 =============================== */}
            <div className={css.kitchen}>
              <TbToolsKitchen2 className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
            {/* ================================== 5 ============================ */}
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
            {/* ========================= 6 ============================ */}
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
          </div>
          <Button label="Show more" />
        </div>
      </div>
    </>
  );
}
