import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import homebanner from "./homebanner";
import Content from "./Content";
import Newsletter from "./Newsletter";

const About = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);
  const [section, setSection] = useState({ "NavbarState":true,"footerState":true,"filterState":false });





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
            {section.homebannerState && <homebanner vars={vars} setSection={setSection} />}
            
            {section.ContentState && <Content vars={vars} setSection={setSection} />}
            
            {section.NewsletterState && <Newsletter vars={vars} setSection={setSection} />}
            
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default About;
