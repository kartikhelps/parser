import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function aboutbannerBanner({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");




    
  return (
    <>
      <IonToast
        isOpen={toastOpen}
        message={toastMessage}
        color={toastColor}
        duration={3000}
        onDidDismiss={() => setToastOpen(false)}
      />
      
      <div className="hero-image">
      
        <div className="hero-text">
          
          <div>Find Your Dream Builder Floor Today</div>
          
          <div>We understand the importance of</div>
          
          <button onClick={() => console.logo("gsdhifg")}>contact us</button>
        </div>
      </div>
    </>
  );
}

export default aboutbannerBanner;
