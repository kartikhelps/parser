import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function BannerBanner({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");


  const backgroundImageStyle = {
    backgroundImage: `url("/assets/imgs/b1.png")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '300px'
  };

    
  return (
    <>
      <IonToast
        isOpen={toastOpen}
        message={toastMessage}
        color={toastColor}
        duration={3000}
        onDidDismiss={() => setToastOpen(false)}
      />
      
      <div style={backgroundImageStyle} className="hero-image">
      
        <div className="hero-text">
          <div>Start Exploring Your Dream</div>
          <div>Builder Floor now</div>
        </div>
      </div>
    </>
  );
}

export default BannerBanner;
