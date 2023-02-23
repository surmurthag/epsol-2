import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => {
    return(
        <div>
            <Link to={'#Home'} >
            <img src={'http://neutrino.yn.lu/maquette1/assets/img/EPISOL4.png'} width="100" height="100"  alt={'Logo EpiSol'}/>
            </Link>
        </div>
    );
}
export default Logo;