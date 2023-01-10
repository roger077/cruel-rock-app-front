import React from 'react';
import './navbar.css';
import brandImg from '../../assets/brand-logo/cruelRockLogo.png';

function Navbar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top">
    {/* <nav class="navbar  fixed-top navbar-expand-lg "> */}
     <div className='container-fluid'>
        <a className="navbar-brand" href="!#">
            <img src={brandImg} alt="Logo" height="50" className="brand-logo d-inline-block align-text-top"/>
            {/* <img src={brandImg} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/> */}
        </a>

       {/*  <a className="navbar-brand" href="!#">Navbar</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="!#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="!#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="!#">Rock Under</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="!#">Relatos Gustaveros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="!#">Nosotros</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link" href="!#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li> */}
                </ul>
            </div>
     </div>
    </nav>
  )
}

export default Navbar