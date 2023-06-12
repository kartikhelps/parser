import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Add_PersonForm from "./Form";

function Add_Person({ setSection, vars }) {
  const navigate = useNavigate();
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
          <Add_PersonForm vars={vars} setSection={setSection} />
           
      </IonContent>
    </>
  );
}

export default Add_Person;
