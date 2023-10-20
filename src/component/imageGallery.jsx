import React from 'react'
import "../css/imageGallery.css"
function ImageGallery(){
    return (
        <div className='gallery'>
            <h2>Image Gallery </h2>
            <div className='row'>
                <span><img src= "img4.png" id="one"/></span>
                <span><img src= "img5.png" id="five"/></span>
                <span><img src= "img1.png" id="two"/></span>
                <span><img src= "img2.png" id="three"/></span>
                <span><img src= "img6.png" id="six"/></span>
                <span><img src= "img3.png" id="four"/></span>
                 <span><img src= "img.png" id="seven"/></span>
            </div>
        </div>
    );
}

export default ImageGallery;