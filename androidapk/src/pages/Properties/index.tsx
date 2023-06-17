import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Property_table from "./Property_table";

const Properties = () => {
  const history = useHistory();

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
            {section.Property_tableState && <Property_table vars={vars} setSection={setSection} />}
            
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Properties;
