import React, { useRef } from 'react'
import ListingsCard from '../listings-card/ListingsCard'
import SortLabels from '../sort-labels/SortLabels'

import './Warehouses.scss'

const warehouses = ({ warehouses, deleteHandler }) => {
  const warehouseLabels = [
    'WAREHOUSE',
    'ADDRESS',
    'CONTACT NAME',
    'CONTACT INFORMATION',
    'ACTIONS',
  ]

  return (
    <div className="warehouses">
      <div className="sortLabels-cont">
        {warehouseLabels.map((label, index) => {
          return <SortLabels key={index} label={label} />
        })}
      </div>
      {warehouses.map((warehouse) => {
        return (
          <ListingsCard
            key={warehouse.id}
            deleteHandler={deleteHandler}
            warehouse={warehouse}
          />
        )
      })}
    </div>
  )
}

export default warehouses
