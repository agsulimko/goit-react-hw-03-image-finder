import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import Modal from './Modal/Modal'
import  Button  from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
//  import styled from 'styled-components'
// import styled from '@emotion/styled'
  // import axios from "axios";
// import GetPhotosService from './Api.js'
//  export default 
class App extends Component {


     state = { showModal: false, 
    loading: false, }

//  Открытие и закрытие модального окна
   toggleModal = () => {
   this.setState(({ showModal })=> ({
      showModal: !showModal,
}))
   }
  //  ///////////////////////////////////////////////
//    componentDidMount() {
//     console.log(' modal DidMount');
//   setTimeout(()=> {
//    fetch('https://pixabay.com/api/?&page=1&key=38614458-d50fcc5469c58311283d9e834&image_type=photo&orientation=horizontal&per_page=12')
//    .then (res => res.json())
// //  .then(console.log);
//  .then (cats => this.setState({cats}));},1000);


//   }

 




// const BAZE_URL = 'https://pixabay.com/api/';


// const getPhotosService = async (value, page) => {

//     const { data } = await axios(BAZE_URL, {
//         params: {
//             key: '38614458-d50fcc5469c58311283d9e834',
//             q: `${value}`,
//             image_type: "photo",
//             orientation: "horizontal",
//             safesearch: "true",
//              page: page,
//              per_page: 40,
//         }
//     });
//     console.log(data);
//     return data;
// }

// export { getPhotosService };





  // ///////////////////////////////////////////
//    render() {
//      const { showModal, cats } = this.state
//       console.log(cats);
//       console.log(cats.hits);

// const catIds = cats && cats.hits ? cats.hits.map(cat => cat.webformatURL) : [];

// console.log(catIds);
//       console.log(this.state.cats.hits);
     // ///////////////////////////////////////////
      
      

     render() {

      const { showModal } = this.state
      //       console.log(cats);
      //       console.log(cats.hits);
      
      // const catIds = cats && cats.hits ? cats.hits.map(cat => cat.webformatURL) : [];
      
      // console.log(catIds);
      //       console.log(this.state.cats.hits);

    return (
      
//       <di> 
//      <div style= {{maxWidth:1170, margin: '0 auto', padding: 20}}> 
//       {this.state.cats.hits && (
//    <div>Тут будет кот после фетча и когда в стейт запишем 
//     <li class="gallery-item">
//   <img src='' alt="" />
// </li>
//    </div>   
//  )}  
  

<div>

         <Searchbar/> 
          <button type='button' onClick={this.toggleModal}>Open modal</button> 
         <ImageGallery />
      {/* <Button /> */}
        {/* <Loader /> */}
        
           
        {showModal &&  <Modal onClose={this.toggleModal} > <h2>Modal Hallo</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias assumenda aliquid incidunt corrupti a pariatur ratione rerum numquam alias omnis in non totam voluptatum quas voluptatem! Non, aspernatur? Suscipit!</p>
        <button type='button' onClick={this.toggleModal}>Close modal</button> 
         </Modal> }   
      
      </div>
    )
  }
}
export default App


