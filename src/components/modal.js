import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col,  Form, InputGroup, } from 'react-bootstrap';
import mtn from "../img/mtn 1.png";
import airtel from "../img/airtel 1.png";
import glo from "../img/glo 1.png"
import ninemobile from "../img/9mobile 1.png";

function MyModal() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handleCloseModal2 = () => setShowModal2(false);
  const handleShowModal2 = () => {
    setShowModal1(false);
    setShowModal2(true);
  };

  const handleCloseModal3 = () => setShowModal3(false);
  const handleShowModal3 = () => {
    setShowModal2(false);
    setShowModal3(true);
  };
  

  return (
    <div>
      <Button className="fnd" style={{border: "none", marginLeft: "170px", marginTop: "9px"}} onClick={handleShowModal1}>
    Fund Wallet
      </Button>

      <Modal centered show={showModal1} onHide={handleCloseModal1}>
     
       <Modal.Header closeButton>
          <Modal.Title className="card-header">
        <p className='text-center'>AIRTIME PURCHASE</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col md={3}>
            <Card className='card-mod'>
              <Card.Body>
                <Card.Title className='card-title-mod'>
                <img className='img-mod' src={mtn} alt="" />
                    </Card.Title>
                <Card.Text>MTN</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='card-mod'>
              <Card.Body>
                <Card.Title className='card-title-mod'>
                    <img  className='img-mod' src={airtel} alt="" />
                </Card.Title>
                <Card.Text>Airtel</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='card-mod'>
              <Card.Body>
                <Card.Title className='card-title-mod'>
                <img  className='img-mod' src={glo} alt="" />
                    </Card.Title>
                <Card.Text>Glo</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='card-mod'>
              <Card.Body>
                <Card.Title className='card-title-mod'>   <img  className='img-mod' src={ninemobile} alt="" /></Card.Title>
                <Card.Text>9mobile</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Form style={{marginTop: "20px"}}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <InputGroup>
                  <Form.Control className='frm' type="text" placeholder="Enter your phone number" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <InputGroup>
                  <Form.Control className='frm' type="text" placeholder="Enter the amount" />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
        </Form>
       
        </Modal.Body>
        <Modal.Footer>
            
          <Button className='btn-1' onClick={handleShowModal2}>
            Next
          </Button>
          <Button   className="btn-2" onClick={handleCloseModal1}>
            Close
          </Button>
          {/* <Button   variant="secondary" onClick={handleCloseModal1}>
            Close
          </Button> */}
        </Modal.Footer>

       
 
        
        
      </Modal>

      <Modal className='modal-2' centered show={showModal2} onHide={handleCloseModal2}>
        <Modal.Header closeButton>
        <Modal.Title className="card-header ">
        <p className='text-center'>AIRTIME CONFIRMATION</p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card className='card-mod'>
              <Card.Body>
                <Card.Title className='card-title-mod'>
                <img className='img-mod' src={mtn} alt="" />
                    </Card.Title>
                <Card.Text>MTN</Card.Text>
              </Card.Body>
            </Card>
          {/* <Button variant="secondary" onClick={handleShowModal3}>
            Next
          </Button> */}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleShowModal3}>
            Next
          </Button>
          {/* <Button variant="secondary" onClick={handleCloseModal2}>
            Close
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Modal className='modal-3' centered show={showModal3} onHide={handleCloseModal3}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 3</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal 3 content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
