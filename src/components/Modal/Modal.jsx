// import * as React from 'react';
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <img src="https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg" alt="Image" style={{ width: '100%' }} />
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}




// import React, { Component } from 'react'
// import css from './Modal.module.css'
// import {createPortal} from 'react-dom';



// const modalRoot= document.querySelector('#modal-root');
// export default class Modal extends Component {

 
// 	componentDidMount() {
//         console.log(' modal DidMount');
		
//         document.addEventListener('keydown', this.handleKeyEsc);  
//         };
    
	
// componentWillUnmount() {
//         console.log('modal WillUnmount ');
// 		document.removeEventListener('keydown', this.handleKeyEsc)
// 	}
	
//  handleKeyEsc = (e) => {
// 		if (e.code === 'Escape') this.props.onClose()
// 		// console.log('Esc');
// 	}
// 	handlBackdropClick= event =>{
//         console.log('BackdropClick');
//         if(event.target===event.currentTarget) {
//             this.props.onClose();
//         }
//     }
 	
// // 		const { children, toggleModal } = this.props
// render() {
//     return createPortal(
//         <div className={css.modalBackdrop} onClick={this.handlBackdropClick}>
// <div className={css.modalContent}>{this.props.children} </div> 
// </div>,
// modalRoot,
//     );
// }

// }







