import{ Component } from 'react'

export default class Searchbar extends Component {

  state = { value: '' }

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
    console.log(value);
   
	}

	

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.submit(this.state.value)
  }
    
   
    render() {
      

    return (
      
        <header class="searchbar">
  <form onSubmit={this.handleSubmit} class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.value}
    />
  </form>
 
  {/* <button type='button' onClick={this.toggleModal}>Open modal</button>   */}
</header>
      
    )
  }

}

// 38614458-d50fcc5469c58311283d9e834

// https://pixabay.com/api/?key=38614458-d50fcc5469c58311283d9e834&q=yellow+flowers&image_type=photo&pretty=true