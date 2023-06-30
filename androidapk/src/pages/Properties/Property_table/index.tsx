import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


// import { FaHome, FaSortAmountUp, FaDirections, BiCurrentLocation } from 'ionicons/icons';

    import Property_tableList from "./Property_tableList";
import Filter from "./Filter";


function Property_table({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>
<Filter />
          <Property_tableList vars={vars} setSection={setSection} />
           
          
    </>
  );
}

export default Property_table;
