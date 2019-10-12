// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const RegisterModals = () => {
    
//     registerAttorney = () => {
//         <>
//             <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Modal heading
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h4>Centered Modal</h4>
//                     <p>
//                         For attorneys
//                     </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick = { props.onHide }>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     }
        
//     registerClient = () => {
//         <>
//             <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Modal heading
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h4>Centered Modal</h4>
//                     <p>
//                         For clients
//                     </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick = { props.onHide }>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     }

//     options = () => {
//         <>
//             <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         <Button value = "attorney" onClick = { this.props.selectModal }>Close</Button>
//                         <Button value = "client" onClick = { this.props.selectModal }>Close</Button>
//                     </Modal.Title>
//                 </Modal.Header>
//             </Modal>
//         </>
//     }

//     return (
//         <>
//             { modalSwitch(this.props.modalType) }
//         </>
//     );
// }

// export default RegisterModals;