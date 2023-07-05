import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Airtime from "../img/phone_android.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Fund() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex align-items-center">
                <img onClick={handleShow} className="imgci" src={Airtime} alt="" />
                <div className="card-info">
                    <h5 className="mb-0 ci">Airtime</h5>
                    {/* <small>Sales</small> */}
                </div>
            </div>
            <Modal className="mod"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Fund;