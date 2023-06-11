import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";

import Home from "./Home";
import Header from "./Header";
import Leads from "./Leads";
import Listview from "./Listview";
import Add_Person from "./Add_Person";
import Modal_Add from "./Modal_Add";

const Home = () => {
  const navigate = useNavigate();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);

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
            {section.HomeState && <Home vars={vars} setSection={setSection} />}
            
            <Header vars={vars} setSection={setSection} />
            
            {section.LeadsState && <Leads vars={vars} setSection={setSection} />}
            
            {section.ListviewState && <Listview vars={vars} setSection={setSection} />}
            
            {section.Add_PersonState && <Add_Person vars={vars} setSection={setSection} />}
            
            {section.Modal_AddState && <Modal_Add vars={vars} setSection={setSection} />}
            
        </>)}
      </IonContent>
    </IonPage>
  );
}

export default Home;
