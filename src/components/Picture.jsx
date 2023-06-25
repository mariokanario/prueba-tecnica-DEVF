import React, { useState } from 'react';
import ModalInfo from './ModalInfo';


const Picture = ({ id, title, picture, explanation }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);



    return (
        <>
            <ModalInfo
                modal={modal}
                toggle={toggle}
                title={title}
                explanation={explanation}
                picture={picture}
            />
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={id}>
                <a
                    href='#'
                    className="card h-100 justify-content-between"
                    onClick={toggle}
                >
                    <h4 className='p-2 text-light'>{title}</h4>
                    {/* <p>{planet?.explanation}</p> */}
                    <figure className='mb-0'>
                        <img className='img-fluid thumbnail' src={picture} alt={title} />
                    </figure>
                </a>
            </div>
        </>
    )
}

export default Picture