import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";
import Carousel from "./Carousel";
import LoadMore from "./LoadMore";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });
  const [isLoading, setLoad] = useState(false);


  const [vars, setVars] = useState({});
  const [section, setSection] = useState({ "NavbarState":true,"HeaderState":true,"SliderState":true,"BannerState":true,"CarouselState":true,"FooterState":true,"LoadMoreState":true });



  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}Masters/list`).then((res) => {
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
            
            {section.SliderState && <Slider vars={vars} setSection={setSection} />}
            
            {section.CarouselState && <Carousel vars={vars} setSection={setSection} />}
            
            {section.LoadMoreState && <LoadMore vars={vars} setSection={setSection} />}
            
            {section.ContentState && <Content vars={vars} setSection={setSection} />}
            
          <Footer vars={vars} setSection={setSection} />
          
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Home;
