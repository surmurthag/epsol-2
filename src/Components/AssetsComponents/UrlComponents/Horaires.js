import React from "react";
import {Link} from "react-router-dom";

const UrlHoraires = () => {
    return(
        <div className={'nav-link'}>
            <Link to={'/#Horaires'}><h5>Horaires</h5></Link>
        </div>
    );
}

export default UrlHoraires;