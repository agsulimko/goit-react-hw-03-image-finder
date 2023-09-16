import { Component } from 'react'
// import getAllPhotos from 'api/api'
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
// import FormCreatePhotos from 'components/FormCreatePhotos/FormCreatePhotos'
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button'
import css from './Searchbar.module.css'

import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
 import InputAdornment from '@mui/material/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { wait } from '@testing-library/user-event/dist/utils';
// import {TextField} from './Searchbar.styled'
export default class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleInputQuery = e => {
    this.setState({ inputQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputQuery.trim() === '') {
     alert('Enter your request');
      return;
    }
    this.props.onSubmit(this.state.inputQuery.trim());
    this.setState({ inputQuery: '' });
  };

 
  render() {
    
    
    console.log(this.state.inputQuery);
		
 return (
  <header className={css.searchbar}>
   
    <form className="form" onSubmit={this.handleSubmit}>

    {/* <Button variant="contained" className='btn btn-success' type='submit' >Show all photos 
    <span className="button-label">Search</span>
    </Button>  */}
      
  
                    <TextField 
                      // className="input"
                     type="text"
                    //  autocomplete="off"
                    //  autofocus
                    //  placeholder="Search images and photos"
                     name='title'
                     size="small"
                     sx={{ m: 1, width: '35ch'}}
                     style={{ backgroundColor: 'white' }}
                    
                    className='form-control'
                    onChange={this.handleInputQuery}
                    value={this.state.inputQuery}
                    id="input-with-sx" 
                    label="Search images and photos" 
                    variant="outlined"
                    margin="dense"
                   
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <YoutubeSearchedForIcon />
                        </InputAdornment>
                      ),
                    }}

                             />  
                   
					
				

                {/* <Button variant="contained" className='btn btn-success' type='submit' >Show all photos </Button> */}
				
			</form> 
     
       {/* <button className='btn btn-success' onClick={handleClick}>
        Show all photos
      </button>  */}
      
      </header>
  )
}
}






      
//       />
//       {isLoading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {photos && (
//         <ul className='list-group'>
//           {(photos).map((el) => (
//             <ImageGalleryItem
//             photos={el}
//               key={el.id}
//               handleDelete={handleDelete}
//                handleCheck={handleCheck}
//             />
//           ))}
//         </ul>
//       )}

















//   state = { value: '' }

// 	handleChange = ({ target: { value } }) => {
//     // toLowerCase() преобразуем букві в нижний регистр
// 		this.setState({ value:value.toLowerCase() })
//     console.log(value);
   
// 	}

	

// 	handleSubmit = (e) => {
// 		e.preventDefault()
//     if (this.state.value.trim() === '') {
//       return alert('Please enter key words for search');}
// 		this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };
    
   
//     render() {
//       const { value } = this.state;
//       console.log(value);

//     return (
      
//         <header className="searchbar">
//   <form onSubmit={this.handleSubmit} className="form">
//     <button type="submit" className="button">
//       <span className="button-label">Search</span>
//     </button>

//     <input
//       className="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//       onChange={this.handleChange}
//       value={this.state.value}
//     />
//   </form>
 
//   {/* <button type='button' onClick={this.toggleModal}>Open modal</button>   */}
// </header>
      
//     )
//   }

// }

// 38614458-d50fcc5469c58311283d9e834

// https://pixabay.com/api/?key=38614458-d50fcc5469c58311283d9e834&q=yellow+flowers&image_type=photo&pretty=true