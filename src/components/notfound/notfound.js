import React from 'react'
import imgnot from '../../img/undraw_firmware_re_fgdy.svg'
import './not.css'
function Notfound({theme}) {
  return (
    <>
    <div className={`not ${theme==='light'?'light':''}`}>
      <div className="img">
        <img src={imgnot} alt="mage" />
      </div>
      <div className="info">
        <h1>الصفحه غير موجوده</h1>
      </div>
    </div>
  </>
  )
}

export default Notfound