import React from 'react'
import './Sidebar.css'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} />
                <p>ADD ITEM</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} />
                <p>LIST ITEMS</p>
            </NavLink>
            <NavLink  to='/order' className="sidebar-option">
                <img src={assets.order_icon} />
                <p>ORDERS</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar