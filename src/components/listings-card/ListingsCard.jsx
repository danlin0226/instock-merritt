import React from 'react';
import './ListingsCard.scss';

import trashIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';

import { Link } from 'react-router-dom';

const ListingsCard = ({ warehouse, test, selected }) => {
  console.log(test);

  return (
    <>
      <article className="listingsCard">
        {test ? (
          <>
            <div className="listingsCard__cont listingsCard__cont--first">
              <h4 className="listingsCard__title">WAREHOUSE</h4>
              {/* <h4 className="listingsCard__title">INVENTORY ITEM</h4> */}
              <Link to={`/warehouses/${warehouse.id}/inventories`}>
                <h3 className="listingsCard__text listingsCard__text--blue">
                  {test.item_name}{' '}
                  <img
                    className="listingsCard__chev"
                    src={chevronIcon}
                    alt="chevron"
                  />
                </h3>
              </Link>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">ADDRESS</h4>
              <p className="listingsCard__text">{test.item_name}</p>
            </div>

            <div className="listingsCard__cont listingsCard__cont--second">
              <h4 className="listingsCard__title">STATUS</h4>
              <h4 className="listingsCard__title">CONTACT NAME</h4>
              <p className="listingsCard__text">{test.item_name}</p>
              {/* conditional for modifier needed */}
              {/* <h4 className="listingsCard__text listingsCard__text--inStock">
            IN STOCK
          </h4> */}
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">CONTACT INFORMATION</h4>
              <p className="listingsCard__text">{test.item_name}</p>
              {/* <p className="listingsCard__text">500</p> */}
            </div>

            <div className="listingsCard__cont">
              <img
                className="listingsCard__img"
                src={trashIcon}
                alt="trashbin"
              />
              <img className="listingsCard__img" src={editIcon} alt="pencil" />
            </div>
          </>
        ) : (
          <>
            <div className="listingsCard__cont listingsCard__cont--first">
              <h4 className="listingsCard__title">WAREHOUSE</h4>
              {/* <h4 className="listingsCard__title">INVENTORY ITEM</h4> */}
              <Link to={`/warehouses/${warehouse.id}/inventories`}>
                <h3 className="listingsCard__text listingsCard__text--blue">
                  {warehouse.warehouse_name}{' '}
                  <img
                    className="listingsCard__chev"
                    src={chevronIcon}
                    alt="chevron"
                  />
                </h3>
              </Link>
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">ADDRESS</h4>
              <p className="listingsCard__text">{warehouse.address}</p>
              <p className="listingsCard__text">{`${warehouse.city} ${warehouse.country}`}</p>
            </div>

            <div className="listingsCard__cont listingsCard__cont--second">
              <h4 className="listingsCard__title">STATUS</h4>
              <h4 className="listingsCard__title">CONTACT NAME</h4>
              <p className="listingsCard__text">{warehouse.contact_name}</p>
              {/* conditional for modifier needed */}
              {/* <h4 className="listingsCard__text listingsCard__text--inStock">
            IN STOCK
          </h4> */}
            </div>

            <div className="listingsCard__cont">
              <h4 className="listingsCard__title">CONTACT INFORMATION</h4>
              <p className="listingsCard__text">{warehouse.contact_phone}</p>
              <p className="listingsCard__text">{warehouse.contact_email}</p>
              {/* <p className="listingsCard__text">500</p> */}
            </div>

            <div className="listingsCard__cont">
              <img
                className="listingsCard__img"
                src={trashIcon}
                alt="trashbin"
              />
              <img className="listingsCard__img" src={editIcon} alt="pencil" />
            </div>
          </>
        )}
      </article>
    </>
  );
};

export default ListingsCard;
