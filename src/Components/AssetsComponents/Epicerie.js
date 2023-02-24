import React from 'react';
import '../../styles/epicerie.css';
import Fruit from './ImgComponents/fruit';
import Base from "./ImgComponents/base";
import Clean from "./ImgComponents/clean";
import Work from "./ImgComponents/work";
const Epicerie = () => {
    return(
        <div>
            <section id="epicerie">
                <div className="container bg-primary-gradient py-5 epicerie-2">
                    <div className="row">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h3 className="fw-bold">Que trouve-t-on à l'épicerie ?</h3>
                        </div>
                    </div>
                    <div className="py-5 p-lg-5 ">
                        <div className="row row-cols-1 row-cols-md-2 mx-auto " >
                            <div className="col mb-5 ">
                                <div className="card card-Epicerie ">
                                    <div className="card-body text-center px-4 py-5 px-md-5 ">
                                        <h5 className="fw-bold card-title">Des fruit et légumes, viandes, produits
                                            laitiers</h5>
                                             <div>
                                                <Fruit />
                                             </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card card-Epicerie">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <h5 className="fw-bold card-title">Des aliments de base</h5>
                                        <div>
                                            <Base />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card-Epicerie  ">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <h5 className="fw-bold card-title">Des produits d'hygiéne et d'entretien</h5>
                                        <div>
                                            <Clean/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-4">
                                <div className="card card-Epicerie">
                                    <div className="card-body text-center px-4 py-5 px-md-5">
                                        <h5 className="fw-bold card-title">...mais aussi des conseil pour mieux vous nourrir
                                            et mieux gérer votre budget</h5>
                                        <div>
                                            <Work />
                                        </div>
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

export default Epicerie;