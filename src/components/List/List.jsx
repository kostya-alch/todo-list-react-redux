import React from 'react'

import './List.scss'
const List = ({ items }) => {
   return (
      <div>
         <ul className="list">
            {
               items.map(item => (
                  <li className='active'>
                     <i>
                        {item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}
                     </i>
                     <span>{item.name}</span>
                  </li>))
            }
         </ul>
      </div>
   )
}

export default List