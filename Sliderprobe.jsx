import React from 'react'
// import university from '..'
function Sliderprobe() {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <div className='slide-img-div'>
      {/* <img src="https://images.pexels.com/photos/5649893/pexels-photo-5649893.jpeg" class="d-block w-100" alt="..."/> */}
        
      <div className="container-fluid p-0 m-auto">
        <video id="bannerVideo" autoPlay muted loop>
        <source src='https://www.pexels.com/download/video/8198509/' type="video/mp4" />
        
        </video>
      </div>
      
      </div>

      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className='slide-img-div'>
 {/* videeo  */}
 <div className="container-fluid p-0 m-auto">
        <video id="bannerVideo" autoPlay muted loop>
        <source src='https://www.pexels.com/download/video/30614645/' type="video/mp4" />
        
        </video>
      </div>


      {/* <img src="https://images.pexels.com/photos/29242208/pexels-photo-29242208.jpeg" class="d-block w-100" alt="..."/> */}
      </div>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className='slide-img-div'>
      <img src="https://images.pexels.com/photos/29242208/pexels-photo-29242208.jpeg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    
    </>
  )
}

export default Sliderprobe
