import React from "react"
import {GrClose} from "react-icons/gr"

const Modal = (props)=>{
    return(

        <div className={`${props.isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                
                  {props.modalInfo}
    
                <button className='close-modal-btn' onClick={props.closeModal}>
                  <GrClose/>
                </button>
            </div>
        </div> 
    )
}

export default Modal