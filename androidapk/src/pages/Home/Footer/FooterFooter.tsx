import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


import { logoLinkedin, logoInstagram } from 'ionicons/icons';

const FooterFooter = () => {
  return (
    <footer className="footer mt-50 overflow-x-hidden">
        <div className="w-[100%] px-0">
            <div
                className="footer-bottom"
                style={ { backgroundColor: "transparent" } }
            >
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center text-md-start bord-bott">
                        <Link to="/">
                            <img
                                style={ {
                                    width: "8%",
                                    height: "auto",
                                    float: "left",
                                } }
                                alt="Builder Floor"
                                src="/assets/imgs/BUILDER.png"
                            />
                        </Link>
                    </div>
                </div>
                <div className="row mt-30 mb-30 bord-top-2">
                    <div className="col-md-10  flex justify-left">
                        <span className="text-body-lead foot-font copyright-p ">
                            © Builder Floor Official 2022
                        </span>
                    </div>
                    <div className="col-md-2 text-right text-lg-end text-md-end copyright-c ">
                        <div className="footer-social d-flex space-x-6 mt-10">
                          <IonIcon icon={ logoLinkedin } style={ { marginRight: '10px' } } />
                          <IonIcon icon={ logoInstagram } style={ { marginRight: '10px' } } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
};

export default FooterFooter;