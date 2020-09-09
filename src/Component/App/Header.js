import React from 'react'
import {Link} from 'react-router-dom'

import logo2 from '../../images/logo2.png'
const Header =()=>{

    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top  bg-transparent">
            <span className="navbar-brand navbarcolor"><img src={logo2}/><span className='fornav'> Heart Of Pottery</span></span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link fornav" to='/'>Home
                            
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link fornav" href="#">Link</a>
                    </li> */}
                    <li className="nav-item dropdown ">
<a className="nav-link dropdown-toggle fornav" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Category
</a>
<div className="dropdown-menu " aria-labelledby="navbarDropdown">
  <Link className="dropdown-item " to='Mugs'>Cups & Mugs</Link>
  <a className="dropdown-item " href="#">Plates</a>
  
  <a className="dropdown-item " href="#">Bowls</a>
  <a className="dropdown-item " href="#">Dinner Sets</a>
  <a className="dropdown-item " href="#">Accessories</a>
  <a className="dropdown-item " href="#">Unique Pieces</a>
</div>
</li>
                    
                </ul>
                
            </div>
        </nav>
    </header>
    )
}

export default Header