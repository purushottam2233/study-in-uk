import React from 'react'
// importing videos and images for card section 
import image1  from '../images/download.avif';
import StudyinukCostimage from '../images/StudyinukCostimage.avif';
import youtubevideo1 from '../videos/youtubevideo1.mp4'
import interview from '../videos/interview.mp4'

// import react icons 
// import { GoArrowRight } from "react-icons/go";


function Cardfullsize() {
  return (
    <>
    <div className='cardfullsize-1div'>
     <div className='container'>

<div className='row'>
  <div className='col-lg-6'>
<p className='cardfullsizep'>
    Life and learning in the UK
</p>
<h2 className='cardfullsizeh2'>Great futures happen when <br /> you study in the UK</h2>

  <ul className='cardfullsizeul'>
    <li>World-ranked universities</li>
    <li>Innovative teaching</li>
    <li>Unforgettable student experience</li>
    <li>Post-study work opportunities</li>
    </ul>

    <button className="btn  align-items-center text-white" type="submit"> Login</button>
  </div>

  {/* ..  */}
 <div className='col-lg-6'>
 <div className='cardfullsizeimg'>
    <img src={image1} alt="" />
 </div>
 </div>

</div>

     </div>
     </div>
{/* .....  */}

<div className='card4-main1'>
<div className='container'>
  <div className='row'>
    {/* .. part frist */}
    
    <div className='col-lg-3'>
        <div className="card" >
            
   <div className="container-fluid p-0 m-auto">
        <video id="bannerVideo" autoPlay muted loop>
        <source src={interview}  type="video/mp4" />
        </video>
      </div>

  <div className="card-body">
    <h5 className="card-title">Budgeting tips</h5>
    <p className="card-text">Ayra, Bournemouth University.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Want to make your money go further while studying? Ayra shares some top money saving tips for students in the UK.</li>
    {/* <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li> */}
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
      Costs and budgeting 
      <i class="fa-solid fa-arrow-right"></i>
      </a>
 
  </div>
</div>
    </div>
    {/* ...part secnd  */}
   <div className='col-lg-3'>

   <div className="card" >
            
    <div className="container p-0 m-auto">
        <video id="bannerVideo" autoPlay muted  loop>
        <source src={interview}  type="video/mp4" />
        </video>
      </div>

           <div className="card-body">
             <h5 className="card-title">Scholarships</h5>
             <p className="card-text"> Explore opportunities</p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Thinking about studying in the UK but need help with funding? Learn about GREAT Scholarships and explore more funding opportunities.</li>
             {/* <li className="list-group-item">A second item</li>
             <li className="list-group-item">A third item</li> */}
           </ul>
           <div className="card-body">
             <a href="#" className="card-link"> Scholarships and funding<i class="fa-solid fa-arrow-right"></i></a>
             {/* <a href="#" className="card-link">Another link</a> */}
           </div>
         </div>


   </div>
   {/* part third */}
    <div className='col-lg-3'>
    
    <div className="card" >
            
    <div className="container-fluid p-0 m-auto">
    <video id="bannerVideo" autoPlay muted loop>
        <source src={interview}  type="video/mp4" />
        </video>
      </div>
           <div className="card-body">
             <h5 className="card-title">'Studying here feels like it's straight from a Harry Potter movie.'</h5>
             <p className="card-text">Nebula, Indonesia</p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">England, Northern Ireland, Scotland and Wales - discover the similarities and differences that make studying in each nation unique.</li>
             {/* <li className="list-group-item">A second item</li>
             <li className="list-group-item">A third item</li> */}
           </ul>
           <div className="card-body">
             <a href="#" className="card-link">Explore the UK nations <i class="fa-solid fa-arrow-right"></i></a>
             
           </div>
         </div>


    </div>
    {/* part fourth */}
     <div className='col-lg-3'>


     <div className="card" >
            
     <div className="container-fluid p-0 m-auto">
        <video id="bannerVideo" autoPlay muted loop>
        <source src={interview}  type="video/mp4" />
        </video>
      </div>
           <div className="card-body">
             <h5 className="card-title">Study creative arts</h5>
             <p className="card-text">Discover the vibrant world of creative arts in the UK.</p>
           </div>
           <ul className="list-group list-group-flush">
             <li className="list-group-item">From dance to fine art to music, explore the endless opportunities available to you and hear what current international students love about studying in the UK.</li>
             {/* <li className="list-group-item">A second item</li>
             <li className="list-group-item">A third item</li> */}
           </ul>
           <div className="card-body">
             <a href="#" className="card-link">Study creative arts <i class="fa-solid fa-arrow-right"></i></a>
             {/* <a href="#" className="card-link">Another link</a> */}
           </div>
         </div>
     </div>
  </div>


</div>

</div>

{/* last div start  */}
   <div className='container'>
    <div className='row'>
      {/* part frist  */}
    <div className='col-lg-6'>
      <div className='containt-div'>

        <p>Planning your budget</p>
        <br />
        <h2>How much does it cost to study in the UK?</h2>
        <br />
        <h6>Studying in the UK is a valuable investment in your future. But how much will it all cost? Here are some highlights to help you plan:</h6>
         <br />
         <ul>
          <li>Tuition fees: typically between £11,400 and £30,000 annually</li>
          <li>Living costs: between £900 and £1,400 a month</li>
          <li>Weekly shop: £35 on average per person</li>
         </ul>
         <h6>There are also a lot of discounts and funding options available to students. Take a look at our costs page to plan your budget.</h6>
    <button type='button'  className='costofstudyinukbtn'>More about the cost of studying in the UK <i class="fa-solid fa-arrow-right arrowwhite" ></i></button>

        </div>
        </div>
 {/* part second  */}

        <div className='col-lg-6'>
        <div className='img-partin-costofstudy'>
          <img src={StudyinukCostimage} alt="" />
        </div>

        </div>

    </div>


   </div>


    </>
  )
}

export default Cardfullsize
