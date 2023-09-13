import React, { Component } from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import GetPhotosService from '../../api/api'

export default class ImageGallery extends Component {
state={isLoading: false, error: '', photos: null, searchValue: ''}

handleSetSearchQuery = (value) => {
  this.setState({ searchValue: value })
}

componentDidUpdate(_, prevState) {
  prevState.searchValue !== this.state.searchValue && this.fetchPhotos()
}






fetchPhotos = async () => {
  try {
    this.setState({ isLoading: true, photos: null })
    const data = await GetPhotosService(this.state.searchValue)
    this.setState({ photos: data.photos })
  } catch (error) {
    this.setState({ error: error.response.data })
  } finally {
    this.setState({ isLoading: false })
  }
}

  render() {
    const { error, isLoading, photos } = this.state

    return (
      <ul className='list'>
     {photos &&
					(!photos.length ? (<h1>No data found</h1>)
			    : (photos.map((photo) => (
							<div key={photo.id} className='container mt-3'>
								<ImageGalleryItem photo={photo} />
							</div>
						))
					))}
       </ul>
        
        
    )
  }
}


