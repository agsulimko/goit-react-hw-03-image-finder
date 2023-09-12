 import { Component } from 'react'
import css from './Modal.module.css'
import {createPortal} from 'react-dom';

const modalRoot= document.querySelector('#modal-root');
export default class Modal extends Component {

 componentWillUnmount() {
        console.log('modal WillUnmount ');
		document.removeEventListener('keydown', this.handleKeyEsc)
	}
	componentDidMount() {
        console.log(' modal DidMount');
		// /??????????????????????????????
        window.addEventListener('keydown', this.handleKeyEsc);
           
        };
        // /??????????????????????????????
	

	

	 handleKeyEsc = (e) => {
		if (e.key === 'Escape') this.props.onClose()
		console.log('Esc');
	}
 	
// 		const { children, toggleModal } = this.props
render() {
    return createPortal(
        <div className={css.modalBackdrop}>
<div className={css.modalContent}>{this.props.children} </div> 
</div>,
modalRoot,
    );
}

}








// const Modal = ({ children}) => {
// 	return (
// 		<div
// 			className='modal fade show'
// 			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 			// onClick={toggleModal}
// 		>
// 			<div className='modal-dialog'>
// 				<div className='modal-content'>
// 					<div className='modal-header'>
// 						<h5 className='modal-title'> Modal</h5>
// 						<button
// 							type='button'
// 							className='btn-close'
// 							aria-label='Close'
// 							// onClick={toggleModal}
// 						></button>
// 					</div>
// 					<div className='modal-body'>{children}</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Modal