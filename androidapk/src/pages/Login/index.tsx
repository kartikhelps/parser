import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";

import Signin from "./Signin";
import Signup from "./Signup";
import Verification from "./Verification";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });

  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(false);
  const [section, setSection] = useState({ "SigninState":true,"SignupState":false,"VerificationState":false });



  useEffect(() => {
    axios.get(import.meta.env.VITE_API +  'master/').then((res) => {
      setVars(res.data.data);
      setLoad(true);
    }).catch(err => {
      setToast({ isOpen: true, message: err.response.data.error, color: "danger" });
    });
  }, []);


  return (
    <IonPage>
      <IonContent>
        <IonToast
          isOpen={toast.isOpen}
          message={toast.message}
          color={toast.color}
          duration={6000}
          onDidDismiss={() => setToast({ isOpen: false, message: "", color: "" })}
        />
        {isLoading && (
          <>
            {section.SigninState && <Signin vars={vars} setSection={setSection} />}
            
            {section.SignupState && <Signup vars={vars} setSection={setSection} />}
            
            {section.VerificationState && <Verification vars={vars} setSection={setSection} />}
            
            <Header vars={vars} setSection={setSection} />
            
        </>)}
      </IonContent>
    </IonPage>
  );
}

export default Login;
