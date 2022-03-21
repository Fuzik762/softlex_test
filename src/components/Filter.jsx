import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Filter = ({children, onChange, options, defaultValue, changeDir}) => {

  const sortDirUp = () => {
    changeDir('asc')
  }
  const sortDirDown = () => {
    changeDir('desc')
  }

  return (
    <div className='filter_wrapper'>
      <div className='filter_inner'>
        <select 
          className='filter' 
          defaultValue={'Сортировка'}
          onChange={event => onChange(event.target.value)}
          > 
          <option disabled>
            {defaultValue}
          </option>
          {options.map(option => 
            <option
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>  
          )}
        </select>
        <div className='filter_dir'>
          <span className='filter_dir__item' onClick={sortDirUp}>
            <FontAwesomeIcon icon={solid('sort-up')}  />
          </span>
          <span className='filter_dir__item' onClick={sortDirDown}>
            <FontAwesomeIcon icon={solid('sort-down')} />
          </span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Filter