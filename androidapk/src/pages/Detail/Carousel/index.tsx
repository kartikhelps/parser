import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


import { FaHome, FaSortAmountUp, FaSquare } from 'ionicons/icons';

    import CarouselList from "./CarouselList";


function Carousel({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          <CarouselList vars={vars} setSection={setSection} />
           
          
    </>
  );
}

export default Carousel;
