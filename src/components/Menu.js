import React, { useState } from 'react';
import { useGlobalContext } from './context';
import {GrClose} from "react-icons/gr"

const Menu = ({items}) => {

  const { isModalOpen, closeModal} = useGlobalContext();
  const {openModal} = useGlobalContext()

  const [modalInfo, setModalInfo] = useState()

  
  {isModalOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="auto"}


  //here the data is mapped, and the modal can be opened/
  return (
    <div className='section-center'>

      {items.map((menuItem) => {
        const { id, title, img, desc, time, steps, ingredients} = menuItem;
        return (
          <div>
            <article key={id} className='menu-item btn' 
            onClick={()=>{setModalInfo(currentInfo=> 
            <div>
              <h3>{title}</h3>
              <h4>{desc}</h4>
              <p><strong>Cook time: </strong>{time} minutes</p>

              <p><strong>Ingredients:</strong> {ingredients}</p>
              <img src={img} alt={title} className='photo-modal'/>

              <ol>
                {steps.map((steps,stepsOrder)=>{
                  return (<li key={stepsOrder}>{steps}</li>)
                })}
              </ol>
              
            </div>); openModal();}}>
              <img src={img} alt={title} className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title} {time} minutes</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>

              <div>
              </div>
            </article>
          {/* modal */}
            <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
              <div className='modal-container'>
                
                  {modalInfo}
    
                <button className='close-modal-btn' onClick={closeModal}>
                  <GrClose/>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
  
};

export default Menu;