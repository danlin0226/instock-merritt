import React from 'react';
import ListingsCard from '../listings-card/ListingsCard';
import SortLabels from '../sort-labels/SortLabels';

import './warehouses.scss';

const warehouses = ({ warehouses }) => {
  console.log('test', warehouses);
  return (
    <div className="warehouses">
      <SortLabels warehouse={warehouses[0]} />
      {warehouses.map((warehouse) => {
        return <ListingsCard warehouse={warehouse} />;
      })}
    </div>
  );
};

export default warehouses;
