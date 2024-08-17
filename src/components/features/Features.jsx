import css from './/Features.module.css';
import { useLocation } from 'react-router-dom';
import { TbToolsKitchen2, TbAutomaticGearbox } from 'react-icons/tb';

export default function Features() {
  const location = useLocation();
  const item = location.state?.item;
  return (
    <div className={css.features}>
      <div className={css.features_left}>
        <div className={css.features_left_img}>
          {/* ========================== adults ========================== */}
          {item.details.kitchen > 0 && (
            <div className={css.kitchen}>
              <TbToolsKitchen2 className={css.fa} />
              <span>Kitchen</span>
            </div>
          )}
          {/* ========================== Automatic ========================== */}
          {item.details.kitchen > 0 && (
            <div className={css.kitchen}>
              <TbToolsKitchen2 className={css.fa} />
              <span>Kitchen</span>
            </div>
          )}
          {/* ========================== AC ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ========================== Petrol ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ========================== kitchen ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  beds ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Air conditioner ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ========================== CD ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ========================== Radio ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  hob ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Toilet ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Shower ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Freezer ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Gas ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Water ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
          {/* ==========================  Microwave ========================== */}
          {/* {item.details.kitchen > 0 && (
          <div className={css.kitchen}>
            <TbToolsKitchen2 className={css.fa} />
            <span>Kitchen</span>
          </div>
        )} */}
        </div>
      </div>
      <div className={css.features_right}></div>
    </div>
  );
}
