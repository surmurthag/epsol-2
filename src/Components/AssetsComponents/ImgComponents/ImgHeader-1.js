import React from "react";
import '../../../bootstrap.min.css'
import '../../../bold-and-bright';
import '../../../styles/header.css';


const ImgHeader1 = () => {
    return(
        <div className={'inline-block float-sm-end float-xl-right'}>
        <div>
            <img src={'http://neutrino.yn.lu/maquette1/assets/img/image0%20(1).jpeg'} className={'imgheader1 '} height={'250'} alt={'img Episol'} />
            <img src={'http://neutrino.yn.lu/maquette1/assets/img/image2%20(1).jpeg'} className={'imgheader2  '} height={'250'} alt={'img Episol'}/>
        </div>

        <div className={'float-sm-end float-xxl-right'}>
            <img src={'http://neutrino.yn.lu/maquette1/assets/img/image1%20(1).jpeg'} className={'imgheader3'} height={'270'}  alt={'img Episol'}/>
        </div>
        </div>
    );
}
export default ImgHeader1;