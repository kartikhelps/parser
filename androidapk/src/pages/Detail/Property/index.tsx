import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


// import { FaHome, FaSortAmountUp, FaDirections, BiCurrentLocation } from 'ionicons/icons';

    import PropertyList from "./PropertyList";


function Property({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          <PropertyList vars={vars} setSection={setSection} />
           
          
    </>
  );
}

export default Property;
