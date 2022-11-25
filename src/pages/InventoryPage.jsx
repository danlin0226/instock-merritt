import React from 'react'
import Title from '../components/title/Title.jsx'
const InventoryPage = () => {
  let activeTable = 'Inventory'
  return (
    <>
      <Title activeTable={activeTable} />
      <div>Inventory Page</div>
    </>
  )
}

export default InventoryPage
