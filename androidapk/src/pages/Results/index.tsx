import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Filter from "./Filter";
import Card from "./Card";
import Navigation from "./Navigation";

const Results = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);
  const [section, setSection] = useState({ "NavbarState":true,"HeaderState":true,"BannerState":true,"ListViewState":true,"FooterState":true });





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
            {section.FilterState && <Filter vars={vars} setSection={setSection} />}
            
            {section.CardState && <Card vars={vars} setSection={setSection} />}
            
            {section.NavigationState && <Navigation vars={vars} setSection={setSection} />}
            
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Results;
