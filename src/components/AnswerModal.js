import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AnswerModal = ({ comment, setComment, numeral, value, getNumeral, show, setShow }) => {
  const handleClose = () => {
    setComment('Answer');
    setShow(false);
  }

  const handleShow = () => {
    getNumeral();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Calculate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>{comment}</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{numeral}</Modal.Body>
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