import { useState, useEffect } from 'react';
import './navbar.module.css';
import brandImg from '../../assets/brand-logo/cruelRockLogo.png';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';
import {CLIENT_ID_OAUTH2} from "../../config.js"


export default function Navbar() {
    
    const [ user, setUser] =useState({});


    useEffect(()=>{
        const start = () => {
            gapi.auth2.init({
                clientId: CLIENT_ID_OAUTH2,
            })
        }
        gapi.load("client:auth2", start)
    },[])


    const onSuccess = (response) => {
        console.log(response)
        setUser(response.profileObj)
    }

     
    const onFailure = () => {
        console.log("Something went wrong, dude")
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
            {/* <nav className="navbar  fixed-top navbar-expand-lg "> */}
            <div className='container-fluid'>
                <a className="navbar-brand" href="/">
                    <img src={brandImg} alt="Logo" height="50" className="brand-logo d-inline-block align-text-top" />
                    {/* <img src={brandImg} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
                </a>

                {/*  <a className="navbar-brand" href="!#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="!#">Rock Under</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="!#">Relatos Gustaveros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about">Nosotros</a>
                        </li>
                    </ul>
                    <div className={user.googleId? "profile":"hidden"}>
                        <img src={ user.imageUrl } alt="" />
                        <h4>{ user.name }</h4>
                    </div>
                    <div>
                            <GoogleLogin 
                                clientId={CLIENT_ID_OAUTH2}
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={"sigle_host_policy"}
                            />
                    </div>
                </div>
            </div>
        </nav>
    )
}