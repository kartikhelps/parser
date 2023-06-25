import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';


import { home } from 'ionicons/icons';



function Footer({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          
        
          <div>
            The right move to choose your new home.
          </div>
        
          <div style={ {display: "flex",alignItems: "center"} }>
            <IonIcon icon={ home } style={ { marginRight: '10px' } } />
            <div className="content">Builder Floor</div>
          </div>
        
          <div>
            C1069, SUSHANT LOK-1, GURGAON ( HARAYANA)
          </div>
        
          <div>
            91 91118xxxx0
          </div>
        
          <div>
            contact@BuilderFloor.com
          </div>
    </>
  );
}

export default Footer;
