import React, { Component } from 'react'

export default class Searchbar extends Component {


    
   
    render() {
      
 




 
    return (
      <div>
        <header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
 
  {/* <button type='button' onClick={this.toggleModal}>Open modal</button>   */}
</header>
      </div>
    )
  }
}


// 38614458-d50fcc5469c58311283d9e834

// https://pixabay.com/api/?key=38614458-d50fcc5469c58311283d9e834&q=yellow+flowers&image_type=photo&pretty=true