import React from 'react';
import ListingsCard from '../listings-card/ListingsCard';
import SortLabels from '../sort-labels/SortLabels';

import './WarehouseDetails.scss';

const warehouseDetails = () => {
  return (
    <div className="warehouseDetails">
      <section className="warehouseDetails__head">
        <div className="warehouseDetails__cont">
          <h4 className="warehouseDetails__title">WAREHOUSE ADDRESS:</h4>
          <p className="warehouseDetails__text">
            33 Pearl Street SW conditional here
          </p>
          <p className="warehouseDetails__text">display none mod</p>
        </div>

        <div className="warehouseDetails__cont">
          <h4 className="warehouseDetails__title">CONTACT NAME:</h4>
          <p className="warehouseDetails__text">Graeme Lyon</p>
          <p className="warehouseDetails__text"> Warehouse Manager</p>
        </div>
        <div className="warehouseDetails__cont">
          <h4 className="warehouseDetails__title">CONTACT INFORMATION:</h4>
          <p className="warehouseDetails__text">+123-465-7897</p>
          <p className="warehouseDetails__text">asdfsa@instock.com</p>
        </div>
      </section>
      <SortLabels />
      <section>
        {/* <ListingsCard />
        <ListingsCard />
        <ListingsCard />
        <ListingsCard />
        <ListingsCard /> */}
      </section>
    </div>
  );
};

export default warehouseDetails;
