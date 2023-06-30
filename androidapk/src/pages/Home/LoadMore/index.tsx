import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';






function LoadMore({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const buttonhandle= (e) =>{

        history.push('/Properties')
  }


  return (
    <>

          
          <div>
            <button type="submit" onClick={ buttonhandle } >
              Load More Destinations
            </button>
          </div>
        
    </>
  );
}

export default LoadMore;
