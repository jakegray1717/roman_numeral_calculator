import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnswerModal = ({ setAnsToggle, comment, setComment, numeral, value }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setAnsToggle(false);
    setComment('Answer');
    setShow(false);
  }

  const handleShow = () => {
    setAnsToggle(true);
    setShow(true);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Calculate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{comment}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{value}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AnswerModal;