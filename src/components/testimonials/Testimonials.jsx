import "./testimonials.scss";
import img1 from "../assets/recommendation1.jpg";
import img2 from "../assets/recommendation2.jpg";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Dr. Mudassir Raza",
      title:
        "Associate Professor at HITEC University Taxila, Pakistan. Approved HEC supervisor Senior Member, IEEE. Academic Editor, PLOS ONE Journal.",
      img: img2,
      icon: img2,
      desc: "I am writing this to one of my best students, Hameed ur Rehman. He was enrolled in my Pattern Recognition course during the 7th semester. As Hameed's teacher, I had the pleasure of observing his exceptional dedication, and enthusiasm for learning. During his studies, Hameed demonstrated an outstanding...",
    },
    {
      id: 2,
      name: "Kamran Arshad",
      title: "Frontend Developer, Fullstack Developer, WordPress, React JS, Next JS Developer",
      img: img1,
      icon: img1,
      desc: "I highly recommend Hameed Ur Rehman for their exceptional skills in HTML, CSS, Bootstrap and JavaScript. They excel in translating complex designs into efficient and visually appealing web applications. Their strong work ethic and collaborative nature make them an invaluable asset to any frontend development team.",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Recommendations</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} className="user" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
