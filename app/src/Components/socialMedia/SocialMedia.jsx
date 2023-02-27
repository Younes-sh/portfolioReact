import React from 'react'
import INSTA from '../../assets/icon/instagram.png'
import GITHUB from '../../assets/icon/github.png'
import CODEPEN from '../../assets/icon/codepen.png'
import './social.css'
// import FACEBOOK from ''

// let iconSocialMedia = [
//     {ICON1:INSTA},
//     {ICON2:GITHUB},
//     {ICON3:CODEPEN},
//     {ICON4:FACEBOOK},
// ]
const SocialMedia = () => {
  return (
    <div className='container-social'>
      <ul className='content'>
        <li><a href=''><img src={INSTA} alt="" /></a></li>
        <li><a href=''><img src={GITHUB} alt="" /></a></li>
        <li><a href=''><img src={CODEPEN} alt="" /></a></li>
        {/* <li><a href=''><i {...iconSocialMedia[3]}></i></a></li> */}
      </ul>
    </div>
  )
}

export default SocialMedia