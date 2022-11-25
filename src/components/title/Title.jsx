import './Title.scss'
import React from 'react'
import SearchCombo from '../search-combo/SearchCombo'

const Title = ({ activeTable }) => {
  const wh = activeTable === 'Warehouses' ? true : false
  const inv = activeTable === 'Inventory' ? true : false

  return (
    <div className="title" style={wh || inv ? { height: '180px' } : ''}>
      <div className="title__text-con">
        <div className="title__text">{activeTable}</div>
        <div className="searchcombo__con">{(wh || inv) && <SearchCombo />}</div>
      </div>
    </div>
  )
}

export default Title
