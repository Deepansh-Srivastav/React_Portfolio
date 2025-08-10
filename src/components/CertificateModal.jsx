import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CertificateModal = ({ show, handleClose, certificateImage }) => {

    return (
        <Modal show={show} onHide={handleClose} centered size="lg">

            <Button
                variant="light"
                onClick={handleClose}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: "1051",
                    borderRadius: "50%",
                    padding: "0px 8px",
                    fontWeight: "bold",
                }}
            >
                ×
            </Button>

            <Modal.Body className="p-0 text-center bg-dark">
                <img
                    src={certificateImage}
                    alt="Certificate"
                    style={{ width: "100%", height: "auto" }}
                />
            </Modal.Body>
        </Modal>
    );
};

export default CertificateModal;
