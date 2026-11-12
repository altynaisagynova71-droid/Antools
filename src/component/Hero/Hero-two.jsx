import "./Hero-two.css";

function HeroTwo() {
  return (
    <section id="hero-two">
      <div className="container">
        <div className="Hero-two">
          <div className="most">
            <div className="popular">
              <h1>Most Popular Tools</h1>
              <p>Tools for the best Designers and Developers <br />most popularly used in the world</p>
            </div>
            <div className="rod">
              <div className="figma">
                <img src="figma.png" alt="" />
                <img src="sketch.png" alt="" />
                <img src="vs.png" alt="" />
              </div>
              <div className="notion">
                <img src="notion.png" alt="" />
                <img src="slack.png" alt="" />
                <img src="invision.png" alt="" />
              </div>              
            </div>
            <div className="button">
              <button>Load more</button>              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTwo;
