import "./workdone.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

function WorkDone() {
  return (
    <div className="workdone" id="workdone">
      <Carousel>
        <div className="slider">
          <img src={img1} alt="ProfileImg" />
          <p className="legend">
            <a href="https://github.com/hameeedurrehman?tab=repositories">
              Check out my Custom Frontend Projects
            </a>
          </p>
        </div>
        <div className="slider">
          <img src={img2} alt="ProfileImg" />
          <p className="legend">
          <a href="https://github.com/hameeedurrehman?tab=repositories">
          Check out my React Projects 
            </a></p>
        </div>
      </Carousel>
    </div>
  );
}

export default WorkDone;
