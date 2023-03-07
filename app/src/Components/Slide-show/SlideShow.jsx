import { Slide } from "react-slideshow-image";
import './styles.css'

const SlideShow = ({ onChangeHandler, slideImages }) => {
  return (
    <div className="slide-container">
    <Slide onChange={(from, to) => onChangeHandler(to)}>
      {slideImages.map((slideImage, index) => (
        <div
          className='slide'
          style={{
            display: "block",
            overflow: "hidden",
            transition: "width 2s, height 4s",
          }}
          key={slideImage.url}
        >
          <img
            src={slideImage.url}
            alt="img"
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>
      ))}
    </Slide>
     </div>
  );
};

export default SlideShow;