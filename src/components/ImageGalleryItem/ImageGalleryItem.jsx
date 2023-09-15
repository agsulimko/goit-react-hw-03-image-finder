import React from 'react';
const ImageGalleryItem = ({hit:{webformatURL,largeImageURL, tags},id}) =>{

 
return(


<li class="gallery-item">
  <img src={webformatURL} alt={tags} width={260}height={150}/>
</li>
)
}

export  default ImageGalleryItem;

// "https://pixabay.com/get/gb94cf3696a0ed4fba98519b268ca73582ed1015808a41fdc862aadf6be5dd4978fa5872c6ad5244bf942e4433f4ab361c1c7e40c6cc91762aba05c9ea719a084_640.jpg"