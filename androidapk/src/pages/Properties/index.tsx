import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Slider from "./Slider";
import Property_table from "./Property_table";
import Footer from "./Footer";

const Properties = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });
  const [isLoading, setLoad] = useState(false);


  const [vars, setVars] = useState({});
  const [section, setSection] = useState({ "Property_tableState":true,"SliderState":true,"BannerState":true,"CarouselState":true,"FooterState":true,"LoadMoreState":true });




  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API_URL}Masters/list`).then((res) => {
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
            {section.SliderState && <Slider vars={vars} setSection={setSection} />}
            
            {section.Property_tableState && <Property_table vars={vars} setSection={setSection} />}
            
          <Footer vars={vars} setSection={setSection} />
          
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Properties;
