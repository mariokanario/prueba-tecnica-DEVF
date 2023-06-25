import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalInfo = ({ modal, toggle, title, explanation, picture }) => {
    return (
        <Modal isOpen={modal} toggle={toggle} size='xl'>
            <ModalHeader toggle={toggle}> {title} </ModalHeader>
            <ModalBody>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img className='img-fluid w-100' src={picture} alt={title} />
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>{explanation}</p>
                        </div>
                    </div>
                </div>

            </ModalBody>
        </Modal>
    )
}

export default ModalInfo