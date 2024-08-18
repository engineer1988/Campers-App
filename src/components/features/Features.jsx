import css from './/Features.module.css';
import { useLocation } from 'react-router-dom';
import { TbToolsKitchen2, TbAutomaticGearbox } from 'react-icons/tb';
import BookingForm from '../booking_form/BookingForm';
import { HiOutlineUsers } from 'react-icons/hi2';
import iconSprite from '../../icons/icons.svg';
import iconSprite2 from '../../icons/sprite2.svg';
import { BiGasPump } from 'react-icons/bi';
import { MdOutlineBed } from 'react-icons/md';
import { TbAirConditioning } from 'react-icons/tb';
import { LiaCompactDiscSolid } from 'react-icons/lia';
import { HiOutlineRadio } from 'react-icons/hi2';
import { FaShower } from 'react-icons/fa6';

export default function Features() {
  const location = useLocation();
  const item = location.state?.item;

  function extractNumber(value) {
    const result = value.match(/[\d.]+/);
    return result ? parseFloat(result[0]) : null;
  }

  function formatString(value) {
    const words = value.replace(/([A-Z])/g, ' $1');
    const formattedString = words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
    return formattedString.trim();
  }

  return (
    <div className={css.features}>
      <div className={css.features_left}>
        <div className={css.features_left_img}>
          {/* ========================== adults ========================== */}
          {item.adults > 0 && (
            <div className={css.kitchen}>
              <HiOutlineUsers className={css.fa} />
              {item.adults}
              <span>adults</span>
            </div>
          )}
          {/* ========================== Automatic ========================== */}
          {item.transmission && (
            <div className={css.kitchen}>
              <TbAutomaticGearbox className={css.fa} />
              {item.transmission}
            </div>
          )}
          {/* ========================== AC ========================== */}
          {item.details.airConditioner > 0 && (
            <div className={css.kitchen}>
              <svg className={css.svg} width="20" height="20">
                <use href={`${iconSprite}#icon-AC`}></use>
              </svg>
              <span>AC</span>
            </div>
          )}
          {/* ========================== Petrol ========================== */}
          <div className={css.kitchen}>
            <BiGasPump className={css.fa} />
            {item.engine}
          </div>
          {/* ========================== kitchen ========================== */}
          {item.details.kitchen > 0 && (
            <div className={css.kitchen}>
              <TbToolsKitchen2 className={css.fa} />
              <span>Kitchen</span>
            </div>
          )}
          {/* ==========================  beds ========================== */}
          {item.details.beds > 0 && (
            <div className={css.kitchen}>
              <MdOutlineBed className={css.fa} />
              {item.details.beds}
              <span>beds</span>
            </div>
          )}
          {/* ==========================  Air conditioner ========================== */}
          {item.details.airConditioner > 0 && (
            <div className={css.kitchen}>
              <TbAirConditioning className={css.fa} />
              <span>air conditioner</span>
            </div>
          )}
          {/* ========================== CD ========================== */}
          {item.details.CD > 0 && (
            <div className={css.kitchen}>
              <LiaCompactDiscSolid className={css.fa} /> <span>CD</span>
            </div>
          )}
          {/* ========================== Radio ========================== */}
          {item.details.radio > 0 && (
            <div className={css.kitchen}>
              <HiOutlineRadio className={css.fa} /> <span>radio</span>
            </div>
          )}
          {/* ==========================  hob ========================== */}
          {item.details.hob > 0 && (
            <div className={css.kitchen}>
              <svg className={css.svg} width="20" height="20">
                <use href={`${iconSprite2}#icon-hob`}></use>
              </svg>
              <span>hob</span>
            </div>
          )}
          {/* ==========================  Toilet ========================== */}
          {item.details.toilet > 0 && (
            <div className={css.kitchen}>
              <svg className={css.svg} width="20" height="20">
                <use href={`${iconSprite2}#icon-toilet`}></use>
              </svg>
              <span>Toilet</span>
            </div>
          )}
          {/* ==========================  Shower ========================== */}
          {item.details.shower > 0 && (
            <div className={css.kitchen}>
              <FaShower className={css.fa} />
              <span>Shower</span>
            </div>
          )}
        </div>
        <div>
          <h3 className={css.vehicle_details_header}>Vehicle details</h3>
          <div className={css.vehicle_details_header_line}></div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Form</span>
            <span className={css.custom}>{formatString(item.form)}</span>
          </div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Length</span>
            <span className={css.custom}>{extractNumber(item.length)} m</span>
          </div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Width</span>
            <span className={css.custom}>{extractNumber(item.width)} m</span>
          </div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Height</span>
            <span className={css.custom}>{extractNumber(item.height)} m</span>
          </div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Tank</span>
            <span className={css.custom}>{extractNumber(item.tank)} l</span>
          </div>
          <div className={css.vehicle_details_item}>
            <span className={css.custom}>Consumption</span>
            <span className={css.custom}>{item.consumption}</span>
          </div>
        </div>
      </div>
      <div className={css.features_right}>
        <BookingForm />
      </div>
    </div>
  );
}
