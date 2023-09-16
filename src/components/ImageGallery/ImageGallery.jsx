
 import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
 import css from './ImageGallery.module.css'
 

const ImageGallery = ({ hits }) => {
    console.log('hits in ImageGallery  :>> ', hits);
    return (
      <div>
        <ul className={css.listImageGallery}>
          {hits.map(hit => (
            <ImageGalleryItem hit={hit} key={hit.id}  />
          ))}
        </ul>
      </div>
    );
  };
  
  export default ImageGallery;



// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// const { value } = this.state;
// //console.log(value);

// export default class ImageGallery extends Component {
//   state = {
//     value: '',
//     images: [],
//     error: null,
//     status: Status.IDLE,

//     page: 1,
//     totalPages: 0,

//     isShowModal: false,
//     modalData: { img:'', tags: '' },
//   };

// // перевіряємо, щоб в пропсах змінився запит
//   // y static відсутній this, тому дублюємо в state - search: ''
//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (prevState.value !== nextProps.value) {
//       return { page: 1, value: nextProps.value };
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { page } = this.state;
//     const prevValue = prevProps.value;
//     const nextValue = this.props.value;
//     //   страхуємо від повторного запиту, якщо вже таке слово було введене
//     if (prevValue !== nextValue || prevState.page !== page) {
//       this.setState({ status: Status.PENDING });

//        // перевіряємо чи є помилка, якщо є - записуємо null
//        if (this.state.error) {
//         this.setState({ error: null });
//       }

//       ImageGalleryItem
//       .getImages(nextValue, page)
//       .then(images => {
//         this.setState(prevState => ({
//           images:
//             page === 1 ? images.hits : [...prevState.images, ...images.hits],
//           status: Status.RESOLVED,
//           totalPages: Math.floor(images.totalHits / 12),
//         }));
//       })
//       .catch(error => this.setState({ error, status: Status.REJECTED }));
//   }
// }

// // custom method to btn load
// handleLoadMore = () => {
//   this.setState(prevState => ({ page: prevState.page + 1 }));
// };

// setModalData = modalData => {
//   this.setState({ modalData, isShowModal: true });
// };

// handleModalClose = () => {
//   this.setState({ isShowModal: false });
// };



// render() {
//   const { images, error, status, page, totalPages, isShowModal, modalData } =
//     this.state;

//  if (status === 'resolved') {
//       return (
//         <>
//           <ul>
//             {images.map(image => (
//               <ImageGalleryItem
//                 key={image.id}
//                 item={image}
//                 onImageClick={this.setModalData}
//               />
//             ))}
//           </ul>
//           {images.length > 0 && status !== 'pending' && page <= totalPages && (
//             <button onClick={this.handleLoadMore}>Load More</button>
//           )}
//           {/* {isShowModal && (
//             <Modal modalData={modalData} onModalClose={this.handleModalClose} />
//           )} */}
//   </>
//       );
//  }}
// }





  
  
  
  






























// // export default class ImageGallery extends Component {
// // state={isLoading: false, error: '', photos: null, searchValue: ''}

// // handleSetSearchQuery = (value) => {
// //   this.setState({ searchValue: value })
// // }

// // componentDidUpdate(_, prevState) {
// //   prevState.searchValue !== this.state.searchValue && this.fetchPhotos()
// // }






// // fetchPhotos = async () => {
// //   try {
// //     this.setState({ isLoading: true, photos: null })
// //     const data = await GetPhotosService(this.state.searchValue)
// //     this.setState({ photos: data.photos })
// //   } catch (error) {
// //     this.setState({ error: error.response.data })
// //   } finally {
// //     this.setState({ isLoading: false })
// //   }
// // }

// //   render() {
// //     const { error, isLoading, photos } = this.state

// //     return (
// //       <ul className='list'>
// //      {photos &&
// // 					(!photos.length ? (<h1>No data found</h1>)
// // 			    : (photos.map((photo) => (
// // 							<div key={photo.id} className='container mt-3'>
// // 								<ImageGalleryItem photo={photo} />
// // 							</div>
// // 						))
// // 					))}
// //        </ul>
        
        
// //     )
// //   }
// // }


