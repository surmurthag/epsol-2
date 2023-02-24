import React from "react";

import '../../styles/footer.css';
import TarnEtGaronne from "./ImgComponents/Partenaires/tarnEtGaronne";


const Footer = () => {
    return(
        <div>
            <footer className={'text-center footer text-faded py-5'}>
                <div>
                    <span className={'d-block'}>Nos partenaires financiers</span>

                        <TarnEtGaronne/>

                </div>
                <div className={'container'}>
                    <p className={'m-0 smal ContainerPartnaire'} ><strong><span
                       >site réalisé par NEUTRINO</span></strong><br/></p>
                </div>
            </footer>
        </div>
    );
}
export default Footer;