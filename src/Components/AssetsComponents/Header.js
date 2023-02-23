import React from "react";

import '../../bootstrap.min.css';
import '../../styles/header.css';
import ImgHeader1 from "./ImgComponents/ImgHeader-1";


const Header = () => {
    return(

        <div id={'Header'} className={'bodyheader '}>
            <div className=" pt-5">
                <div className="container pt-4 pt-xl-5 ">
                    <div className="row pt-5">
                        <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                            <div className="text-center">
                                <p className="fw-bold mb-2">EpiSol est une épicerie social et solidaire.</p>
                                <h2 className="fw-bold">elle donne accés à des aliments à prix abordable</h2>
                            </div>
                        </div>
                        <div className={'imgheader'}>
                                <ImgHeader1/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;