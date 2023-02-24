import React from "react";
import '../../../styles/accordion.css';

const Map = () => {
    return(
        <div>


    <div id="map" ></div>

            <iframe className={'GooMap'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179.32525070056622!2d1.3610177318479286!3d44.01717851201984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac0d23535d4a79%3A0xfe83dc474e98cf95!2sEpisol%20(%C3%A9picerie%20solidaire)!5e0!3m2!1sfr!2sfr!4v1667693813240!5m2!1sfr!2sfr" ></iframe>
        </div>
    );
}

export default Map;