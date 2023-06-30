import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


import { UilMap , UilBuilding , UilCompass , UilTrees , UilCube , UilComparison , UilCheckCircle , UilCornerUpRightAlt  } from 'ionicons/icons';

      import InfoboxInfobox from "./InfoboxInfobox";


function Infobox({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          <InfoboxInfobox vars={vars} setSection={setSection} />
           
          
    </>
  );
}

export default Infobox;
