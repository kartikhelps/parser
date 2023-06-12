import React, { useState } from 'react';
import { IonButton, IonCheckbox, IonContent, IonItem, IonInput, IonLabel, IonPage, IonRadio, IonRadioGroup, IonSelect, IonSelectOption, IonToast, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SigninForm = ({ setSection, vars }) => {
  const history = useHistory();
  let Regex = { password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ };
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    Login: '',
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
      email: formData.email,
      password: formData.password,
    };

    axios.post(import.meta.env.VITE_API + 'users/login', {
      ...sendData
    })
      .then((res) => {
        history.push('/Home');
      })
      .catch((err) => {
        setToastOpen(true);
        setToastMessage(err.response.data.error);
        setToastColor("error");
      });
    setLoad(true);
  };

  return (
    <IonPage>
      <IonContent>
        <IonToast
          isOpen={toastOpen}
          message={toastMessage}
          color={toastColor}
          duration={3000}
          onDidDismiss={() => setToastOpen(false)}
        />
        <form onSubmit={handleSubmit}>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              value={formData.email}
              onIonChange={handleChange}
              type="text"
              placeholder="Email"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              name="password"
              value={formData.password}
              onIonChange={handleChange}
              type="password"
              placeholder="Password"
            ></IonInput>
          </IonItem>
          <IonButton
            type="submit"
            expand="full"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SigninForm;
