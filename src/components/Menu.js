import React, { useState } from 'react';
import { useGlobalContext } from './context';
import Modal from "./Modal"

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
          <div key={id}>
            <article key={id} className='menu-item btn' 
            onClick={()=>{setModalInfo(currentInfo=> 
            <div>
              <h3>{title}</h3>
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

          <Modal modalInfo={modalInfo} isModalOpen={isModalOpen} closeModal={closeModal}/>
          </div>
        );
      })}
      
    </div>
  );
  
};

export default Menu;