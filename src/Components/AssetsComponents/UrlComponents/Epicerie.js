import React from "react";
import {Link} from "react-router-dom";

const UrlEpicerie = () => {
    return(
        <div className={'nav-link'}>
            <Link to={'#Epicerie'}><h5>L'épicerie</h5></Link>
        </div>
    );
}
export default UrlEpicerie;