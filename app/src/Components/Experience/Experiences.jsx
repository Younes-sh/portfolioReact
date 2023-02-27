import React from 'react'
import image1 from '../../assets/Imge/coffee.png'
import image2 from '../../assets/Imge/crypto.png'
import image3 from '../../assets/Imge/panel.png'
import image4 from '../../assets/Imge/younicoin.png'
const Experiences = () => {
  return (
	<div>


		<article class="slide">
		  <div class="slide-show">
		    <div class="slide-item"> <img class="slide-img" src={image1} /></div>
		    <div class="slide-item"> <img class="slide-img" src={image2} /></div>
		    <div class="slide-item"> <img class="slide-img" src={image3} /></div>
		    <div class="slide-item"> <img class="slide-img" src={image4} /></div>
		  </div>
		  <div class="slide-text">
		    <div class="half a-center">
		      <h2 class="alide-title">"The slide" just watch it</h2>
		    </div>
		    <div class="half a-down"><a class="btn over-transparent" href="">Button Here</a></div>
		    <ul class="slide-indicator">
		      <li class="indicator-item"><a rol="low-indicator"></a></li>
		      <li class="indicator-item"><a rol="low-indicator"></a></li>
		      <li class="indicator-item"><a rol="low-indicator"></a></li>
		    </ul>
		  </div>
		</article>


	</div>
  )
}

export default Experiences