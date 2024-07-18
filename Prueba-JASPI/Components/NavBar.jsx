import React from 'react'
import vColor from '../src/assets/vCloudPoint-Color.png'

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg -bs-dark-bg-subtle bg-body-tertiary sticky-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'><img src={vColor} alt='VCOLOR' /></a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>Inicio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Productos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Clientes</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Escenarios</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Soporte</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Compañia</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
