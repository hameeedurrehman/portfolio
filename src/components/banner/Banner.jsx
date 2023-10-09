import "./banner.scss";
import img from "../assets/display-img.png";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <div className="banner" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="ProfileImg" />
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h2>Hi There, I'm</h2>
          <h1>Hameed Ur Rehman</h1>
          <span className="loopText">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Front End Developer",
                ],
                autoStart: true,
                delay: 75,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
