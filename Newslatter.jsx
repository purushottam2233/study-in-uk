import React from 'react'

function Newslatter() {
  return (
   <>
   <div className='newslater'>
    <div className="container mt-5">
        <div className="row pt-5">
            {/* frist part  */}
            <div className="col-lg-6">
            <div className="newslaterfrist">
            <h2>Sign up to our <br /> newsletter</h2>
            <p>Get the latest updates and advice on applications, scholarships, visas and events.</p>
            </div>

            </div>
      

      {/* second  */}
            <div className="col-lg-6">

                <div className='inputinnewslatter' herf="#newsletter">
                    <p>Email address</p>
                    <input type="text"  placeholder='User@Domian.com'/>
                    <button>Sumbit <i className="fa-solid fa-arrow-right arrowwhite"></i></button>
                    
                </div>
            </div>
        </div>
    </div>
   
   
   
    </div>
   </>
  )
}

export default Newslatter
