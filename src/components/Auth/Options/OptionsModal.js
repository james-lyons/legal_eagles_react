import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OptionsModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Button className="auth-modal" value = "attorney" onClick = { props.selectModal }>Attorneys</Button>
                        <Button className="auth-modal" value = "client" onClick = { props.selectModal }>Clients</Button>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    );
};

export default OptionsModal;