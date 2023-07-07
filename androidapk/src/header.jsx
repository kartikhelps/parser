import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';

const GenericHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleButtonClick = (modalType) => {
    setActiveModal(modalType);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setActiveModal(null);
  };

  const renderModalContent = () => {
    // Customize the content for each modal type
    switch (activeModal) {
      case 'modal1':
        return (
          <div>
            <h2>Modal 1</h2>
            <p>This is the content for Modal 1.</p>
          </div>
        );
      case 'modal2':
        return (
          <div>
            <h2>Modal 2</h2>
            <p>This is the content for Modal 2.</p>
          </div>
        );
      case 'modal3':
        return (
          <div>
            <h2>Modal 3</h2>
            <p>This is the content for Modal 3.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Button onClick={() => handleButtonClick('modal1')}>Button 1</Button>
      <Button onClick={() => handleButtonClick('modal2')}>Button 2</Button>
      <Button onClick={() => handleButtonClick('modal3')}>Button 3</Button>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <div>
          {renderModalContent()}
          <Button onClick={handleModalClose}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default GenericHeader;
