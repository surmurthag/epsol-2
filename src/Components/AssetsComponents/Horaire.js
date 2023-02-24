import React from "react";
import "../../current-day";
import '../../styles/horaire.css';
const Horaire = () => {
    return(
        <div>

            <section id={'Horaires'} className="page-section cta cta-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto cta-2">
                            <div className="text-center cta-inner rounded cta-3">
                                <h2 className="section-heading mb-5 ti"><span className="section-heading-lower ti-1">Horaires d'ouverture</span>
                                </h2>
                                <ul className="list-unstyled text-start mx-auto list-hours mb-5 day-1">

                                    {/*TODO changer de couleur le jour de la semaine
                                    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate*/}

                                    <li className="d-flex list-unstyled-item list-hours-item day"
                                        /*style="color: rgb(52, 58, 64);font-weight: bold;"*/>Lundi<span
                                        className="ms-auto">Fermer</span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day">Mardi<span
                                        className="ms-auto">8h30-12h00 / 13h30-17h30</span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day">Mercredi<span
                                        className="ms-auto"><em>8h30-12h00 / 13h30-17h30</em><br/></span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day">Jeudi<span
                                        className="ms-auto"><em>8h30-12h00 / 13h30-17h30</em><br/></span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day">Vendredi<span
                                        className="ms-auto">8h30 / 13h30-16h00</span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day">Samedi<span
                                        className="ms-auto">13h00-17h00</span></li>
                                    <hr/>
                                    <li className="d-flex list-unstyled-item list-hours-item day"
                                        /*style="color: rgb(52, 58, 64);font-weight: bold;"*/>Dimanche<span
                                        className="ms-auto">Fermer</span></li>
                                    <hr/>

                                </ul>
                                <p className="address  mb-5"><em><strong>19 Rue Henri Teulières</strong><span><br/>82000, Montauban</span></em>
                                </p>
                                <p className="address  mb-0">
                                    <small><em>Téléphone</em></small><span><br/>05.63.66.38.46</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Horaire;