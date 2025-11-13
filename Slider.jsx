import React from 'react'
// import video1 from "../videos/";

function Slider() {
  return (
    <div className='sliderdata'>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70x" class="d-block w-100" alt="..."></img> */}
      
      <div className="container-fluid p-0 m-auto">
        <video id="bannerVideo" autoPlay muted loop>
        <source src='https://ucarecdn.com/39c853e7-c308-4b44-b00d-40a2ad10a20c/' type="video/mp4" />
        
        </video>
      </div>
      
    </div>
    <div className="carousel-item">

    <video id="bannerVideo" autoPlay muted loop>
          <source src='https://ucarecdn.com/da1f062c-fe5a-4bb6-b017-1e945e430194/' type="video/mp4" />
          <h1>study</h1>
        </video>
      {/* <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" class="d-block w-100" alt="..."></img> */}
    </div>
    <div className="carousel-item">
    <video id="bannerVideo" autoPlay muted loop>
    <source src='https://ucarecdn.com/385e01c4-f7cd-4501-aa2c-5bd82f2da834/' type="video/mp4" />
        </video>
      {/* <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70" class="d-block w-100" alt="..."></img> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
