import React from "react";
import '../../bootstrap.min.css';
import '../../styles/link.css';
import Logo from "./ImgComponents/Logo";
import UrlQuiSommeNous from "./UrlComponents/QuiSommeNous";
import UrlPresentation from "./UrlComponents/Presentation";
import UrlEpicerie from "./UrlComponents/Epicerie";
import UrlHoraires from "./UrlComponents/Horaires";

const NavBar = () => {
    return(
        <div>
            <nav className="navbar navbar-light navbar-expand-md fixed-top bg-light">
                <div className="container">
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#menu"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="menu">

                            <li className="nav-item d-none d-xs-block d-md-block">
                                <div className={'nav-link'}>
                                    <Logo/>
                                </div>
                            </li>
                            <ul className="navbar-nav flex-grow-1 justify-content-center">
                            <li className={'nav-text'}><div><UrlPresentation/>    </div></li>
                            <li className={'nav-text'}><div><UrlQuiSommeNous/>    </div></li>
                            <li className={'nav-text'}><div><UrlEpicerie/>        </div></li>
                            <li className={'nav-text'}><div><UrlHoraires/>        </div></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;