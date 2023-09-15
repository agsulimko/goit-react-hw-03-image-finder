import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
// import Modal from './Modal/Modal'
// import  Button  from './Button/Button';
 import ImageGallery from './ImageGallery/ImageGallery';
//  import styled from 'styled-components'
// import styled from '@emotion/styled'
  // import axios from "axios";
    import getAllPhotos from '../api/api'
    import { Container } from '@mui/material';

   class App extends Component {


    state = {
      searchQuery: '',
      gallery: null,
      currentPage: 1,
      error: null,
      isLoading: false,
    };

    componentDidMount;

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.currentPage !== prevState.currentPage ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      this.fetchGallery();
    }
  }

  fetchGallery = async () => {
    this.setState({ isLoading: true });
    try {

      const { hits } = await getAllPhotos(
        this.state.searchQuery,
        this.state.currentPage
      );
      
      // this.setState({ gallery: hits });

     
      if (hits.length === 0) {
        this.setState({ error: 'Not data found' });
      }
      if (hits.length > 0) {
        this.setState({ gallery: hits });
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hendleFormSubmit = (searchQuery) => {
    this.setState({ error: null, searchQuery });

    console.log(searchQuery);
  };



render() {
  const { error, gallery, isLoading } = this.state;
 
  console.log(gallery);
   return (
    <Container maxWidth="xl">



          <Searchbar  onSubmit={this.hendleFormSubmit}/>   
         {/* <button type='button' onClick={this.toggleModal}>Open modal</button>  */}
         {gallery && gallery.length > 0 && <ImageGallery hits={gallery} />}
     {/* <Button /> */}
       {/* <Loader /> */}
       
{/*           
       {showModal &&  <Modal onClose={this.toggleModal} > <h2>Modal Hallo</h2>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias assumenda aliquid incidunt corrupti a pariatur ratione rerum numquam alias omnis in non totam voluptatum quas voluptatem! Non, aspernatur? Suscipit!</p>
       <button type='button' onClick={this.toggleModal}>Close modal</button> 
        </Modal> }    */}
     
     </Container>
   )
 }
}

export default App

























// class App extends Component {


//      state = { showModal: false, 
//     loading: false, photos: null }

// //  Открытие и закрытие модального окна
//    toggleModal = () => {
//    this.setState(({ showModal })=> ({
//       showModal: !showModal,
// }))
//    }
//   // ///////////////////////////////////////////////
//     componentDidMount() {
//    console.log(' modal DidMount');
//    getPhotosService.then((data) => console.log(data))

 
//     }





//   // ///////////////////////////////////////////
// //    render() {
// //      const { showModal, cats } = this.state
// //       console.log(cats);
// //       console.log(cats.hits);

// // const catIds = cats && cats.hits ? cats.hits.map(cat => cat.webformatURL) : [];

// // console.log(catIds);
// //       console.log(this.state.cats.hits);
//      // ///////////////////////////////////////////
      
     

//      render() {
      
//       // getPhotosService();

//       const { showModal } = this.state
//       //       console.log(cats);
//       //       console.log(cats.hits);
      
//       // const catIds = cats && cats.hits ? cats.hits.map(cat => cat.webformatURL) : [];
      
//       // console.log(catIds);
//       //       console.log(this.state.cats.hits);

//     return (
      
// //       <di> 
// //      <div style= {{maxWidth:1170, margin: '0 auto', padding: 20}}> 
// //       {this.state.cats.hits && (
// //    <div>Тут будет кот после фетча и когда в стейт запишем 
// //     <li class="gallery-item">
// //   <img src='' alt="" />
// // </li>
// //    </div>   
// //  )}  
  

// <div>

//           <Searchbar/>  
//           <button type='button' onClick={this.toggleModal}>Open modal</button> 
//          {/* <ImageGallery /> */}
//       {/* <Button /> */}
//         {/* <Loader /> */}
        
           
//         {showModal &&  <Modal onClose={this.toggleModal} > <h2>Modal Hallo</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias assumenda aliquid incidunt corrupti a pariatur ratione rerum numquam alias omnis in non totam voluptatum quas voluptatem! Non, aspernatur? Suscipit!</p>
//         <button type='button' onClick={this.toggleModal}>Close modal</button> 
//          </Modal> }   
      
//       </div>
//     )
//   }
// }

// export default App


