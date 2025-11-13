import React from 'react'

function Cardprobe(cardimg,cardheading,cardpara) {
  return (
    <>
    <div className='mycard'>
      <div className='mycardimg'>
        <img src={cardimg} alt=""  />
      </div>
      <h2>{cardheading}</h2>
      <p>{cardpara}</p>
    </div>
    </>
  )
}

export default Cardprobe
