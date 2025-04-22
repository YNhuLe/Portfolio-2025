import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ContactModal.scss";
function ContactModal({ response, onHide, show }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={onHide} dialogClassName="my-modal">
      <Modal.Header closeButton>
        <Modal.Title>Hi there, {response.name}!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{response.text}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactModal;
