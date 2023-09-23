import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose, apps, setApps, drName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentDate = `${date} ${hour}:${minute}`;
    setApps([
      ...apps,
      {
        id: new Date().getTime(),
        patient: name,
        day: appointmentDate,
        consulted: false,
        doctor: drName,
      },
    ]);
    setName("");
    setDate(new Date().toISOString().slice(0, 10));
    setHour("00");
    setMinute("00");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
              <Form.Label>Time</Form.Label>
              <div className="d-flex">
                <Form.Control
                  as="select"
                  className="me-2"
                  onChange={(e) => setHour(e.target.value)}
                  value={hour}
                  required
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i.toString().padStart(2, "0")}>
                      {i.toString().padStart(2, "0")}
                    </option>
                  ))}
                </Form.Control>
                <span className="me-2">:</span>
                <Form.Control
                  as="select"
                  onChange={(e) => setMinute(e.target.value)}
                  value={minute}
                  required
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i.toString().padStart(2, "0")}>
                      {i.toString().padStart(2, "0")}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
