import  React, {Component}  from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

class FormCreatePhotos extends Component{

    state = { value: '' }

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
    console.log(value);
    console.log(this.state.value);
	}

  

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.submit(this.state.value)
	}

	render() {
    
  return (
    
    <form onSubmit={this.handleSubmit}>
				<div className=''>
				
                    <TextField 
                  name='title'
                  type='text'
                  className='form-control'
                  onChange={this.handleChange}
                  value={this.state.value}
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined"
                     />
					
				</div>

                {/* <Button variant="contained" className='btn btn-success' type='submit' >Show all photos </Button> */}
				
			</form>


      
    
  )
}
}
export default FormCreatePhotos;

// onClick={handleClick}
// state = { value: '' }

// 	handleChange = ({ target: { value } }) => {
// 		this.setState({ value })
// 	}

// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		this.props.submit(this.state.value)
// 	}

// 	render() {
// 		return (
			
// 		)
// 	}
// }

