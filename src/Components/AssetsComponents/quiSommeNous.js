import React from "react";

import '../../styles/QSN.css'
import Imgqsn from "./ImgComponents/Imgqsn";
import Imgqsn2 from "./ImgComponents/Imgqsn2";
import Imgqsn3 from "./ImgComponents/Imgqsn3";

const Quisommenous = () => {
    return(
        <div>

            <section id="quiSommeNous">
                <div className="container py-5">
                    <div className="mx-auto qsn5" >
                        <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
                            <div className="col mb-4 ">
                                <div className="card card-1">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <p className="titleCard-1 fs-5 fw-bold text-light card-text mb-2">Une
                                            épicerie solidaire, c'est quoi ?</p>
                                        <h5 className="fw-bold text-start card-text mb-3">Les épiceries sociales et
                                            solidaires apportent une aide, principalement alimentaire, à un public en
                                            difficulté économique, fragilisé ou exclu.</h5>
                                        <h5 className="fw-bold card-text text-start">Dans des espaces aménagés en libre-service,
                                            aussi proche que possible d'un magasin d'alimentation général, elle mettent
                                            à disposition de leurs usagers des produits variés et de qualité, moyennant
                                            une faible participation financière.</h5>

                                        <div>
                                            <Imgqsn/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card-2">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <p className=" titleCard-2 fs-5 fw-bold text-light card-text mb-2">Quel
                                            objectif pour l'épicerie ?</p>
                                        <h5 className="fw-bold text-start card-title mb-3">EpiSol a pour finalité de
                                            promouvoir l'autonomie et à terme, l'insertion durable.</h5>
                                        <h5 className="fw-bold text-start">Pour cela, elle donne accès avec une
                                            proposition de suivie individuel et collectif adapté à la situation et au
                                            besoin de chaque personne.</h5>
                                        <h5 className="fw-bold text-start">EpiSol proposera aussi divers ateliers :
                                            prévention santé, atelier cuisine, atelier budget...</h5>

                                        <div className={'imgqsn2'}>
                                            <Imgqsn2/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card-3">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <p className="titleCard-3 fw-bold text-light card-text mb-2">Comment
                                            accéder à l'épicerie solidaire ?</p>
                                        <h5 className="fw-bold text-start card-title mb-3">L'accés est validé par EpiSol
                                            en fonction de critères socio-économiques familiaux et de ce qui reste à la
                                            personne pour vivre au quotidien.</h5>

                                        <div>
                                            <Imgqsn3/>
                                        </div>
                                        <p className=" titleCard-3 fw-bold text-light mt-3" >Qui
                                            m'accueille à l'épicerie ?</p>
                                        <h5 className="fw-bold text-start">Une équipe composé de salariés et de
                                            bénévoles est à votre écoute et vous conseille.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Quisommenous;