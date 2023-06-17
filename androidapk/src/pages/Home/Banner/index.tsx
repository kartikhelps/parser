import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';

import {  } from 'ionicons/icons';



function Banner({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  return (
    <>
      <IonContent>
        <IonToast
          isOpen={toastOpen}
          message={toastMessage}
          color={toastColor}
          duration={3000}
          onDidDismiss={() => setToastOpen(false)}
        />
          <BannerBanner vars={vars} setSection={setSection} />
           
      </IonContent>
    </>
  );
}

export default Banner;
