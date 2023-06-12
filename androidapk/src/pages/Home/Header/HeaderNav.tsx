import React, { useState } from 'react';
import { IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonHeader, IonIcon, IonContent, IonAvatar, IonTooltip, IonMenu, IonList, IonItem, IonLabel, IonToast } from '@ionic/react';
import { menuOutline, personOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const pages = [  "title",  "about",  "blog",  ];

function ResponsiveAppBar({ setSection, vars }) {
  const [showMenu, setShowMenu] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const history = useHistory();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = (page) => {
    setShowMenu(false);
    handleNavigation(page);
  };

  const handleNavigation = (page) => {
    if (page === "title") {
    }
    if (page === "about") {
    }
    if (page === "blog") {
    }
  };

  return (
    <>
     <IonMenu side="start" contentId="main-content" isOpen={showMenu} onIonDidClose={() => setShowMenu(false)}>
        <IonContent>
          <IonList>
            <IonItem button onClick={() => handleMenuItemClick("title")}>
              <IonLabel>title</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleMenuItemClick("about")}>
              <IonLabel>about</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleMenuItemClick("blog")}>
              <IonLabel>blog</IonLabel>
            </IonItem>

          </IonList>
        </IonContent>
      </IonMenu>

       <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton onClick={handleToggleMenu}>
              <IonIcon icon={menuOutline} />
            </IonMenuButton>
          </IonButtons>
          <IonTitle>LOGO</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={personOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent id="main-content">
        {/* Rest of your content goes here */}
      </IonContent>
      <IonToast isOpen={toastOpen} message={toastMessage} duration={3000} onDidDismiss={() => setToastOpen(false)} />
        </>


   
  );
}

export default ResponsiveAppBar;
