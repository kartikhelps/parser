import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";

import ListSection from "./ListSection";

const TableView = () => {
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
        {isLoading && (
          <>
            {section.ListSectionState && <ListSection vars={vars} setSection={setSection} />}
            
        </>)}
      </IonContent>
    </IonPage>
  );
}

export default TableView;
