import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
//  import Modal from './Modal/Modal'
 import  ButtonLoad  from './ButtonLoad/ButtonLoad'
// import Button from '@mui/material/Button'
 import ImageGallery from './ImageGallery/ImageGallery';
//  import styled from 'styled-components'
// import styled from '@emotion/styled'
  // import axios from "axios";
    import getAllPhotos from '../api/api'
    import { Container } from '@mui/material';

   class App extends Component {


    state = {
      searchQuery: '',
      gallery: [],
      currentPage: 1,
      quantityPage: null,
      error: null,
     isLoading: false,
      // showModal: false,
      // largeImageURL: null,
      // tags: null,
    };
    componentDidMount;

   

	// toggleModal = () => {
	// 	this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	// }



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

      const { hits,totalHits } = await getAllPhotos(
        this.state.searchQuery,
        this.state.currentPage
      );
      
      if (!hits.length) {
       alert(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
       }
     
      // if (hits.length === 0) {
      //   this.setState({ error: 'Not data found' });
      // }


      if (hits.length > 0) {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...hits],
          quantityPage: Math.ceil(totalHits / 12),
        }));
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hendleFormSubmit = (searchQuery) => {
    this.setState({ currentPage: 1,
      quantityPage: null,
      gallery: [],
      error: null,
      searchQuery, });

    // console.log(searchQuery);
  };

  handleBtnLoad = () => {
    this.setState(prev => ({
      currentPage: prev.currentPage + 1,
    }));
  };

render() {
  const {
    error,
    gallery,
    isLoading,
    showModal,
    largeImageURL,
    tags,
    currentPage,
    quantityPage,
  } = this.state;
  // const { error, gallery, isLoading } = this.state;
  console.log(gallery);
   return (
    <Container maxWidth="xl">



          <Searchbar  onSubmit={this.hendleFormSubmit}/>   
         {/* <button type='button' onClick={this.toggleModal}>Open modal</button>  */}
         {gallery && gallery.length > 0 && <ImageGallery hits={gallery} />}
         {currentPage < quantityPage && (
          <ButtonLoad handleBtnLoad={this.handleBtnLoad} />
        )}

{/* <Button  handleBtnLoad={this.handleBtnLoad} /> */}

       {/* <Loader /> */}
       
       {/* <Modal> </Modal>     */}
       {/* {showModal &&  <Modal onClose={this.toggleModal} > <h2>Modal Hallo</h2>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias assumenda aliquid incidunt corrupti a pariatur ratione rerum numquam alias omnis in non totam voluptatum quas voluptatem! Non, aspernatur? Suscipit!</p>
       <button type='button' onClick={this.toggleModal}>Close modal</button> 
        </Modal> }     */}
     
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


