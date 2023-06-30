import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


import { logoLinkedin, logoInstagram } from 'ionicons/icons';

  import FooterFooter from "./FooterFooter";


function Footer({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          <FooterFooter vars={vars} setSection={setSection} />
            
          
    </>
  );
}

export default Footer;
