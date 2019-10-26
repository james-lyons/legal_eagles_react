import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OptionsModal = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Button value = "attorney" onClick = { props.selectModal }>For Attorneys</Button>
                        <Button value = "client" onClick = { props.selectModal }>For Clients</Button>
                    </Modal.Title>
                </Modal.Header>
            </Modal>
        </>
    );
};

export default OptionsModal;