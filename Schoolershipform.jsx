import React from 'react'



function Schoolershipform() {
  return (
    <> 
 
     
    <div className='scholershipform-main'>
      <div className='scolershipform'>
        <h2>Search for UK courses and scholarships</h2>
        <ul className='scolershipform-menus'>

          <li className="scholershipformoptions "><a href="" className='courses'>Courses</a></li>
          <li className="scholershipformoptions"><a href=""> Institutions</a></li>
          <li className="scholershipformoptions"><a href="">Scholarships</a></li>
        </ul>
        {/* <hr /> */}

        {/* <h3>Search by course keyword or subject:</h3> */}
        <form action="" method=''>
          <label htmlFor="" >Search by course keyword or subject:</label>
          <div className='scholershipform-contains-input'>
          <div className='scholershipform-contains-input-1'>
          <input type="text" placeholder='course search keywords' />
          <span>or</span>
          
           <select name="coursees" id="" >
           <option value="">Select your course</option>
            <option value="">Engineering and technology</option>
            <option value="">Bechlor of science</option>
            <option value="">MBA</option>
            <option value="">Bechlor of Arts</option>
            <option value="">LAW</option>
            <option value="">Health and medicine</option>

            </select> 
            </div>

            {/* ..  */}
            <div className='scholershipform-contains-input-1'>
            <select name="levelofstudy" id="" >
           <option value="">select level of study</option>
            <option value="">undergraduate</option>
            <option value="">Access coursees</option>

            <option value="">Certificates and deploma</option>
            <option value="">Frist degrres</option>
            <option value="">Masters</option>
            <option value="">Integrate Master's degree</option>
            <option value="">Foundation degrees</option>

            </select>
           
            {/* ../  */}
            
            <select name="select-region-in-uk" id="" >
           <option value="">Select region in uk</option>
            <option value="">England</option>
            <option value="">Scotland</option>

            <option value="">Wlese</option>
            <option value="">Northan Ireland </option>
            </select>
            </div>
            <button
                className="btn-submit-scholerform"
                type="submit">
               Submit
              </button>
 
          </div>
        </form>



      </div>
    </div>
 {/* image great schloor ship  */}
 <div class="schloorshipform-backgroundimg">
  <h1>GREAT Scholarships</h1>
</div>


    </>
  )
}

export default Schoolershipform
