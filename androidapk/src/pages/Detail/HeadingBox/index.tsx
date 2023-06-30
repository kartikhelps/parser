import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';




      import HeadingBoxHeadingBox from "./HeadingBoxHeadingBox";


function HeadingBox({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          <HeadingBoxHeadingBox vars={vars} setSection={setSection} />
           
          
    </>
  );
}

export default HeadingBox;
