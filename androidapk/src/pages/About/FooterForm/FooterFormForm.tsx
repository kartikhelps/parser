import React, { useState } from 'react';
import { IonButton, IonInput,IonRange, IonLabel, IonSelect, IonSelectOption, IonItem, IonCheckbox, IonRadioGroup, IonRadio, IonAlert, IonToast,IonTextarea } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const FooterFormForm = ({ setSection, vars }) => {
  const history = useHistory();
  let Regex = { password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ };
  const [toast, setToast] = useState({ open: false, status: '', msg: '' });
  


  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    msg: '',
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
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            name="name"
            placeholder="Enter your name"
            value={formData.name }
            onIonChange={handleChange}
            placeholder="Name"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Company</IonLabel>
          <IonInput
            name="company"
            placeholder="Company (Optional)"
            value={formData.company }
            onIonChange={handleChange}
            placeholder="Company"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            name="email"
            placeholder="Your Email"
            value={formData.email }
            onIonChange={handleChange}
            placeholder="Email"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Phone</IonLabel>
          <IonInput
            name="phone"
            type="tel"
            placeholder="Enter your number"
            value={formData.phone }
            onIonChange={handleChange}
            placeholder="Phone"
            rows={3}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Msg</IonLabel>
          <IonTextarea
            name="msg"
            value={formData.msg }
            placeholder="Tell us about yourself"
            onIonChange={handleChange}
            placeholder="Msg"
            rows={3}
          ></IonTextarea>
        </IonItem>
        <IonButton type="submit" onClick={handleSubmit} >
          Send Message
        </IonButton>
      </form>
    </>
  );
};

export default FooterFormForm;
