import css from './CampersItem.module.css';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi2';
import { TbToolsKitchen2, TbAutomaticGearbox } from 'react-icons/tb';
import { BiGasPump } from 'react-icons/bi';
import { MdOutlineBed } from 'react-icons/md';
import iconSprite from '../../icons/icons.svg';
import { useState } from 'react';
import Button from '../button/Button';
import { selectCampers } from '../../redux/campersSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CampersItem({ item }) {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const [showBtnHeart, setShowBtnHeart] = useState(true);
  const toggleHeart = () => {
    setShowBtnHeart(!showBtnHeart);
  };
  const favoriteCamper = id => {
    console.log(id);
  };

  const handleclick = () => {
    toggleHeart();
  };
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
              <button className={css.button} onClick={handleclick}>
                {showBtnHeart && (
                  <svg className={css.svg} width="20" height="20">
                    <use href={`${iconSprite}#icon-heart1`}></use>
                  </svg>
                )}
                {!showBtnHeart && (
                  <svg className={css.svg} width="20" height="20">
                    <use href={`${iconSprite}#icon-heart2`}></use>
                  </svg>
                )}
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
            <p className={css.div_right_third_text}>{item.description.slice(0, 65)}...</p>
          </div>
          <div className={css.div_right_forth}>
            {/* ============================= adults =========================== */}
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
            {/* =========================== automatic ============================ */}
            <div className={css.kitchen}>
              <TbAutomaticGearbox className={css.fa} />
              {/* <svg className={css.fa}>
                <use href={`${iconSprite}#icon-Automatic`}></use>
              </svg> */}

              {item.transmission}
            </div>
            {/* ========================== petrol ============================= */}
            <div className={css.kitchen}>
              <BiGasPump className={css.fa} />
              {item.engine}
            </div>
            {/* =========================== Kitchen =============================== */}
            {item.details.kitchen > 0 && (
              <div className={css.kitchen}>
                <TbToolsKitchen2 className={css.fa} />
                <span>Kitchen</span>
              </div>
            )}
            {/* ================================== beds ============================ */}
            <div className={css.kitchen}>
              <MdOutlineBed className={css.fa} />
              {item.details.beds}
              <span>beds</span>
            </div>
            {/* ========================= AC ============================ */}
            {item.details.airConditioner > 0 && (
              <div className={css.kitchen}>
                <svg className={css.svg} width="20" height="20">
                  <use href={`${iconSprite}#icon-AC`}></use>
                </svg>
                <span>AC</span>
              </div>
            )}
          </div>
          <Button variant="show" label="Show more" />
        </div>
      </div>
    </>
  );
}
