import React from 'react';

function Card({ image }) {
    const myStyle = {
        width: '1 rem'
      };
  return (
     <>   
<div class="card" style={{myStyle}}>
  <img src={image.previewURL} alt=""/>
     <div class="card-body">
        <h4 class="card-text">{image.user}</h4>
          <p class="card-text">Likes: {image.likes}</p>
             <p class="card-text">Tags: {image.tags}</p>
    </div>
</div>
    </>
  );
}

export default Card;
