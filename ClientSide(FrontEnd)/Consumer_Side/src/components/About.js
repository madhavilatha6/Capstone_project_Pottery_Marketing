import "./About.css";

function About() {
  return (
    <div>
      <img
        className="horse"
        src="https://sktperfectdemo.com/themepack/pottery/wp-content/themes/skt-pottery/images/default-header-img.jpg"
        alt=""
      />
      <div className="who-we-are">
        <div className="who-1">
          <h4 className="heading">WHO WE ARE?</h4>
          <h1 className="heading">About Us</h1>
          <hr className="horizantal"></hr>
          <h1 className="heading">Vision</h1>
          <div className="linegap">
            Becoming a leading pottery studio, we're dedicated to excellence,
            innovation, and community. We inspire artistic exploration,
            meaningful connections, and environmental stewardship, leaving a
            lasting positive impact.
          </div>
          <h1 className="heading">Mission</h1>
          <div className="linegap">
            In Andhra Pradesh's Palamaner Mandal, skilled artisans craft an
            enchanting variety of Terracotta pottery using a unique blend of
            black and red clay, creating exquisite pieces like painted lamps,
            musical instruments, vases, idols, and more.
          </div>
          <button id="about-read">Read More</button>
        </div>
        <div className="who-2">
          <img
            className="aboutimg"
            src="https://sktperfectdemo.com/themepack/pottery/wp-content/uploads/2019/11/welcome-img1.jpg"
          />
        </div>
      </div>
      <div className="pottery">
        <img className="process" src="resources/process.jpg" alt="" />
        <div className="potteryPara">
          <h3>whole process to make pot</h3>
          <ul>
            <li>Think the design of the pot</li>
            <li>Create the pot expected design</li>
            <li>Finishing the pot</li>
            <li>Fire the pot</li>
            <li>Sell to the Customer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

