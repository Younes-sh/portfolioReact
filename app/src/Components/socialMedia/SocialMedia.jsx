import React from 'react'
import INSTA from ''
import GITHUB from ''
import CODEPEN from ''
import FACEBOOK from ''

let iconSocialMedia = [
    {ICON:''},
    {ICON:''},
    {ICON:''},
    {ICON:''},
]
const SocialMedia = () => {
  return (
    <div>
        <ul>
            <li><a href={INSTA}><i></i></a></li>
            <li><a href={GITHUB}><i></i></a></li>
            <li><a href={CODEPEN}><i></i></a></li>
            <li><a href={FACEBOOK}><i></i></a></li>
        </ul>
    </div>
  )
}

export default SocialMedia