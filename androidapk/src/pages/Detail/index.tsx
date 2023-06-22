import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Header from "./Header";
import Box from "./Box";
import Infobox from "./Infobox";
import Property from "./Property";
import Footer from "./Footer";

const Detail = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(true);
  const [section, setSection] = useState({ "BoxState":true,"InfoboxState":true });



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
            
            {section.BoxState && <Box vars={vars} setSection={setSection} />}
            
            {section.InfoboxState && <Infobox vars={vars} setSection={setSection} />}
            
            {section.PropertyState && <Property vars={vars} setSection={setSection} />}
            
          <Footer vars={vars} setSection={setSection} />
          
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Detail;
