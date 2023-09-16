import React from 'react';

import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 1200,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  padding: 0,

};

const ImageGalleryItem = ({hit:{webformatURL,largeImageURL, tags},id}) =>{
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
return(

<>
<li onClick={handleOpen} className="gallery-item">
  <img src={webformatURL} alt={tags} width={260}height={150}/>
</li>
 <div>

 {/* <Button onClick={handleOpen}>Open modal</Button> */}
 <Modal
   open={open}
   onClose={handleClose}
   aria-labelledby="modal-modal-title"
   aria-describedby="modal-modal-description"
 >
   <Box sx={style}>
     <img src= {largeImageURL}
alt={tags} style={{ width: 800,   marginBottom: -50, }} />
       
     
   </Box>
 </Modal>
</div>
</>

)
}

export  default ImageGalleryItem;






// // import * as React from 'react';
// import React from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: 'none',
//   boxShadow: 24,
//   p: 4,
//   padding: 0,

// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
         
//           <img src= 
// "https://pixabay.com/get/g9fa88d8f527c93fc8a7a32f6b024c94e43ce0ad33aec7b27556725b8cacb75118bbe0e52abd5d11511f607cb820adbab988faa0ca4988dafcd481afa6fc78855_1280.jpg" alt="Image" style={{ width: '100%',   marginBottom: -50, }} />
            
          
//         </Box>
//       </Modal>
//     </div>
//   );
// }





// "https://pixabay.com/get/gb94cf3696a0ed4fba98519b268ca73582ed1015808a41fdc862aadf6be5dd4978fa5872c6ad5244bf942e4433f4ab361c1c7e40c6cc91762aba05c9ea719a084_640.jpg"