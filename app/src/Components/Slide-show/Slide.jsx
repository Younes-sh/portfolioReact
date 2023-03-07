import "./styles.css";
import SlideShow from "./SlideShow";

import image1 from '../../assets/Imge/coffee.png'
import image2 from '../../assets/Imge/crypto.png'
import image3 from '../../assets/Imge/panel.png'
import image4 from '../../assets/Imge/younicoin.png'

const slideImages = [
  {
    url:
      image1,
    caption: "Slide 1"
  },
  {
    url:
      image2,
    caption: "Slide 2"
  },
  {
    url:
    image3,
    caption: "Slide 3"
  },
  {
    url:
    image4,
    caption: "Slide 3"
  }
];

export default function Slide() {
  const onChangeHandler = (to) => {
    console.log("next", to);
  };
  return (
    <div className="Slide">
      <SlideShow slideImages={slideImages} onChangeHandler={onChangeHandler} />
    </div>
  );
}
