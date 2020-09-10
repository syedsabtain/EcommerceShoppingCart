import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import logo2 from '../../images/logo2.png'
const Header =()=>{
    const value= useSelector(state=>state)
    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top  bg-transparent ">
            <span className="navbar-brand navbarcolor"><img src={logo2} alt='logo'/><span className='fornav'> Heart Of Pottery</span></span>
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
            <div className="collapse navbar-collapse " id="navbarCollapse">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item  ">
                        <Link className="nav-link fornav " to='/'>Home
                            
                        </Link>
                    </li>
                    
                    <li className="nav-item dropdown ">
<a className="nav-link dropdown-toggle fornav" href=".navbar" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Category
</a>
<div className="dropdown-menu " aria-labelledby="navbarDropdown">
  <Link className="dropdown-item " to='Mugs'>Cups & Mugs</Link>
  <Link className="dropdown-item " to='Plates'>Plates</Link>
  
  <Link className="dropdown-item " to='Bowls' >Bowls</Link>
  <Link className="dropdown-item " to='Dinner'>Dinner Sets</Link>
  <Link className="dropdown-item " to='Accessories'>Accessories</Link>
  <Link className="dropdown-item " to='UniquePiecies'>Unique Piece</Link>
</div>
</li>
<li className="nav-item d-flex float-right">
                        <Link className="nav-link fornav" to='cart'>Cart<span className="badge badge-secondary badge-pill">{Object.keys(value).length}</span>
                            
                        </Link>
                    </li>
                    
                </ul>
                
            </div>
        </nav>
    </header>
    )
}

export default Header