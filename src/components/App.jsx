import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import Modal from './Modal/Modal'
//  import styled from 'styled-components'
// import styled from '@emotion/styled'


//  export default 
class App extends Component {


     state = { showModal: false, };

//  Открытие и закрытие модального окна
   toggleModal = () => {
   this.setState(({ showModal })=> ({
      showModal: !showModal,
}));
   };
   
  
   render() {
     const { showModal } = this.state;

   

    
    return (
      <> 
         <Searchbar/> 
          <button type='button' onClick={this.toggleModal}>Open modal</button> 
        {/* <ImageGallery />
        <ImageGalleryItem />
        <Loader />*/}
        {/* <Button />  */}
          
        {showModal &&  <Modal onClose={this.toggleModal} > <h2>Modal Hallo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias assumenda aliquid incidunt corrupti a pariatur ratione rerum numquam alias omnis in non totam voluptatum quas voluptatem! Non, aspernatur? Suscipit!</p>
        <button type='button' onClick={this.toggleModal}>Close modal</button> 
         </Modal> }  
      
      </>
    )
  }
}
export default App


