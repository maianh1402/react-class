import React from 'react';
import './Nav.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/images/pa.png'

class Nav extends React.Component{
    render() {
      return (
        <div className="topnav">
            <img src={logo} alt='logo'style={{width:'70px', height:'50px'}}/>
            <div className='item'>
              <NavLink  to="/" exact='true'>Home</NavLink>
              <NavLink  to="/todo">Todo</NavLink>
              <NavLink  to="/about">About</NavLink>
              <NavLink  to="/user">User</NavLink>
            </div>
        </div>
      )
    }
}

export default Nav;