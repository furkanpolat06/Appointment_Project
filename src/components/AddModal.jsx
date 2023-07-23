import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {useState} from "react"

function AddModal({ show, handleClose, apps, setApps, drName }) 
{
  const [name, setName] = useState("");
  console.log({name});
  const [date, setDate] = useState(new Date().toISOString().slice(0,10));

  const handleSubmit=(e)=>{
    e.preventDefault()
    setApps([...apps, {
      id:new Date().getTime(),
      patient:name ,
      day:date,
      consulted:false,
      doctor : drName,
    }, ])

    handleClose()
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
              onChange={(e)=>setName(e.target.value)}
              value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control 
              type="date" 
              placeholder="Date" 
              onChange={(e)=>setDate(e.target.value)}
              value={date} />
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
