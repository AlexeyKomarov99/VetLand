import React from 'react';
import Modal from 'react-modal';

const CreateVolunteerApplication = ({windowVolunteerApplication, closeWindowVolunteerApplication}) => {
  return (
    <Modal 
      className='CreateVolunteerApplication'
      overlayClassName='CreateVolunteerApplication__overlay'
      isOpen={windowVolunteerApplication}
      onRequestClose={closeWindowVolunteerApplication}
    >
      
    </Modal>
  )
}

export default CreateVolunteerApplication;