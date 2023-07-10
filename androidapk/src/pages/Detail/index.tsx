import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import { IonButton, IonContent, IonPage, IonToast } from "@ionic/react";
import environment from "../../environment"

import Header from "./Header";
import HeadingBox from "./HeadingBox";
import Box from "./Box";
import ImageSlider from "./ImageSlider";
import Infobox from "./Infobox";
import Carousel from "./Carousel";
import Footer from "./Footer";
import {useApiData} from './../../hooks/useApiData.js'
import { width } from "@mui/system";


const Detail = () => {
  const history = useHistory();

  const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });
  // const [isLoading, setLoad] = useState(true);


  const [vars, setVars] = useState({});
  const [isLoading, setLoad] = useState(true);
  const [section, setSection] = useState({ "BoxState":true,"InfoboxState":true,"HeadingBoxState":true ,CarouselState:"true"});
 
  // const { data, isLoading, error } = useApiData (
  //   'GET',
  //   'Masters/list',
  //   'Master',
  // );



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
            <Header vars={vars} setSection={setSection} />
            
            {section.HeadingBoxState && <HeadingBox vars={vars} setSection={setSection} />}
            
            {section.BoxState && <Box vars={vars} setSection={setSection} />}
            
            {/* {section.ImageSliderState && <ImageSlider vars={vars} setSection={setSection} />} */}
            
            {section.InfoboxState && <Infobox vars={vars} setSection={setSection} />}
            {/* <div style={ { display:"flex" , height:"max-content", width:"800px"} }> */}
            {section.CarouselState && <Carousel vars={vars} setSection={setSection} />}
            {/* </div> */}
            
          <Footer vars={vars} setSection={setSection} />
          
        </>
        )
        }
      </IonContent>
    </IonPage>
  );
}

export default Detail;
