import React, { useState } from 'react';
import { IonButton, IonInput,IonRange, IonLabel, IonSelect, IonSelectOption, IonItem, IonCheckbox, IonRadioGroup, IonRadio, IonAlert, IonToast,IonTextarea } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SliderForm = ({ setSection, vars }) => {
  const history = useHistory();
  let Regex = { password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ };
  const [toast, setToast] = useState({ open: false, status: '', msg: '' });
  

  const [sliderpriceRangeValue, setSliderpriceRangeValue] = useState({ lower: 25000000, upper: 35000000 });

  const handleSliderpriceRangeChange = (e) => {
    setSliderpriceRangeValue({ lower: e.detail.value.lower, upper: e.detail.value.upper });
  };

  const [formData, setFormData] = useState({
    locations: '',
    priceRange: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      locations: formData.locations,
      priceRange : {min:sliderpriceRangeValue.lower,max:sliderpriceRangeValue.upper},
    };

  };

  return (
    <>
      <IonToast
        isOpen={toast.open}
        message={toast.msg}
        duration={3000}
        onDidDismiss={() => setToast(false)}
      />

      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel>City</IonLabel>
          <IonSelect name="locations" value={formData.locations } onIonChange={handleChange}>
            { vars.city.map((v) => (
            <IonSelectOption key={v.Value} value={ v.Value }>{v.Label}</IonSelectOption>
          ))}
          </IonSelect>
        </IonItem>
        <IonItem lines="none">
          <IonLabel slot="start">{sliderpriceRangeValue.lower}</IonLabel>
          <IonRange
            dualKnobs={true}
            min={ 25000000 }
            max={ 35000000 }
            name="priceRange"
            value={sliderpriceRangeValue}
            onIonChange={handleSliderpriceRangeChange}
          />  
          <IonLabel slot="end">{sliderpriceRangeValue.upper}</IonLabel>
        </IonItem>
        <IonButton type="submit" onClick={handleSubmit} >
          Search
        </IonButton>
      </form>
    </>
  );
};

export default SliderForm;
