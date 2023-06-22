import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Header from "./Header";
import Banner from "./Banner";
import Content from "./Content";
import Footer from "./Footer";
import FooterForm from "./FooterForm";
import Contentbelow from "./Contentbelow";
import Box from "./Box";

const About = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(true);
  const [section, setSection] = useState({ "BoxState":true,"BannerState":true,"ContentState":true,"FooterFormState":true,"ContentbelowState":true });



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
            
            {section.ContentState && <Content vars={vars} setSection={setSection} />}
            
          <Footer vars={vars} setSection={setSection} />
          
            {section.FooterFormState && <FooterForm vars={vars} setSection={setSection} />}
            
            {section.ContentbelowState && <Contentbelow vars={vars} setSection={setSection} />}
            
            {section.BoxState && <Box vars={vars} setSection={setSection} />}
            
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default About;
