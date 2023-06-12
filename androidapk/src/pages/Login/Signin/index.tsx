import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import SigninForm from "./SigninForm";

function Signin({ setSection, vars }) {
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
          <SigninForm vars={vars} setSection={setSection} />
           
      </IonContent>
    </>
  );
}

export default Signin;
