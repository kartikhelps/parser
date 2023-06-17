import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Header from "./Header";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Footer from "./Footer";

const Home = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);
  const [section, setSection] = useState({ "NavbarState":true,"HeaderState":true,"BannerState":true,"CarouselState":true,"FooterState":true });



  useEffect(() => {
    axios.get(`${environment.VITE_API} master/`).then((res) => {
      setVars(res.data.data);
      setLoad(true);
    }).catch(err => {
      setToast({ isOpen: true, message: err.response.data.error, color: "danger" });
    });
  }, []);


  return (
    <IonPage>
      <IonContent>
        <IonToast
          isOpen={toast.isOpen}
          message={toast.message}
          color={toast.color}
          duration={6000}
          onDidDismiss={() => setToast({ isOpen: false, message: "", color: "" })}
        />
        {isLoading && (
          <>
            <Header vars={vars} setSection={setSection} />
            
            {section.BannerState && <Banner vars={vars} setSection={setSection} />}
            
            {section.CarouselState && <Carousel vars={vars} setSection={setSection} />}
            
          <Footer vars={vars} setSection={setSection} />
          
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Home;
