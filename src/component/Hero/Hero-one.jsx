import "./Hero-one.css";

function HeroOne() {
  return (
    <section id="hero-one">
      <div className="container">
        <div className="Hero-one">
            <div className="rod">
                <div className="awesom">
                    <h1>Awesome tools for <br />Designer & Developer.</h1>
                    <p>Antool is a web collection of information on paid or <br /> free Design and Development tools</p>
                    <input type="text" placeholder="find more than 430+ tools..."/>
                    <button>Search</button>
                </div>
                <div className="awesomimg">
                    <img src="./Hero-one.png" alt="" />
                </div>                
            </div>

        </div>
      </div>
    </section>
  );
}

export default HeroOne;