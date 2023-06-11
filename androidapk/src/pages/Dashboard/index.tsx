import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";

import Heading from "./Heading";
import DataInfo from "./DataInfo";
import Charts from "./Charts";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Card_1 from "./Card_1";
import Card_2 from "./Card_2";
import Card_3 from "./Card_3";

const Dashboard = () => {
  const navigate = useNavigate();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);
  const [section, setSection] = useState({ "ListViewState":true });



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
            {section.HeadingState && <Heading vars={vars} setSection={setSection} />}
            
            {section.DataInfoState && <DataInfo vars={vars} setSection={setSection} />}
            
            {section.ChartsState && <Charts vars={vars} setSection={setSection} />}
            
            {section.SidebarState && <Sidebar vars={vars} setSection={setSection} />}
            
            <Header vars={vars} setSection={setSection} />
            
            {section.Card_1State && <Card_1 vars={vars} setSection={setSection} />}
            
            {section.Card_2State && <Card_2 vars={vars} setSection={setSection} />}
            
            {section.Card_3State && <Card_3 vars={vars} setSection={setSection} />}
            
        </>)}
      </IonContent>
    </IonPage>
  );
}

export default Dashboard;
