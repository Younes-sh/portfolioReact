import React from 'react'
import INSTA from '../../assets/icon/instagram.png'
import GITHUB from '../../assets/icon/github.png'
import CODEPEN from '../../assets/icon/codepen.png'
import FACEBOOK from ''

let iconSocialMedia = [
    {ICON1:'INSTA'},
    {ICON2:'GITHUB'},
    {ICON3:'CODEPEN'},
    {ICON4:'FACEBOOK'},
]
const SocialMedia = () => {
  return (
    <div>
        <ul>
            <li><a href={...iconSocialMedia[0]}><i></i></a></li>
            <li><a href={...iconSocialMedia[1]}><i></i></a></li>
            <li><a href={...iconSocialMedia[2]}><i></i></a></li>
            <li><a href={...iconSocialMedia[3]}><i></i></a></li>
        </ul>
    </div>
  )
}

export default SocialMedia