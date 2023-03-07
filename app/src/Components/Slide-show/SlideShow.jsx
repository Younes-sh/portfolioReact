import React from 'react'
import './Slide-Show.css'
import { Slide } from 'react-slideshow-image'

import image1 from '../../assets/Imge/coffee.png'
import image2 from '../../assets/Imge/crypto.png'
import image3 from '../../assets/Imge/panel.png'
import image4 from '../../assets/Imge/younicoin.png'



const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const SlideShow = () => {
  return (
	<div className='containerSlide'>

    <Slide {...proprietes}>
        <div className="each-slide">
            <div>
                <img src={image1} alt="img1" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={image2} alt="img2" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={image3} alt="img3" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={image4} alt="img3" />
            </div>
        </div>
    </Slide>

	</div>
  )
}

export default SlideShow