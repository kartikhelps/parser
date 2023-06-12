import React, { useState } from 'react';
import { IonToolbar, IonButtons, IonButton, IonMenuButton, IonTitle, IonHeader, IonIcon, IonContent, IonAvatar, IonTooltip, IonMenu, IonList, IonItem, IonLabel, IonToast } from '@ionic/react';
import { menuOutline, personOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const pages = [  "notification",  "profile",  ];

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
    if (page === "notification") {
    }
    if (page === "profile") {
    }
  };

  return (
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
      <IonMenu side="start" contentId="main-content" isOpen={showMenu} onIonDidClose={() => setShowMenu(false)}>
        <IonContent>
          <IonList>
            <IonItem button onClick={() => handleMenuItemClick("notification")}>
              <IonLabel>notification</IonLabel>
            </IonItem>
            <IonItem button onClick={() => handleMenuItemClick("profile")}>
              <IonLabel>profile</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonToast isOpen={toastOpen} message={toastMessage} duration={3000} onDidDismiss={() => setToastOpen(false)} />
    </IonHeader>
  );
}

export default ResponsiveAppBar;
