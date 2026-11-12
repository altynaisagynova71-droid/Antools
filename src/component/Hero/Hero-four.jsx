import "./Hero-four.css";

function HeroFive() {
  return (
    <section id="hero-four">
      <div className="container">
        <div className="Hero-four">
          <div className="new">
            <div className="tools">
              <h1>Newcomer Tools</h1>
              <p>Wow! see the latest update of the most <br /> recommended tools from reliable designers <br /> and developers</p>
              <button>Explore more</button>
            </div>
            <div className="zeplin">
              <div className="php">
                <img src="./zeplin.png" alt="" />
                <img src="./php.png" alt="" />
              </div>
              <div className="tool">
                <img src="./tool.png" alt="" />
                <img src="./proc.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFive;

