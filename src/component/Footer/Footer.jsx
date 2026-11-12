import "./Footer.css";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="Footer">
            <div className="rod">
                <div className="an">
                    <img src="./an.png" alt="" />
                    <h4>Copyright 2021. Antools</h4>
                    <p>Antool is a web collection of <br /> information on paid or free Design <br /> and Development tools</p>
                </div>
                <div className="con">
                    <h4>Contact Us</h4>
                    <p>+621987463</p>
                    <p>M Building, No.10 A</p>
                    <p>antools@awesome.com</p>
                </div>
                <div className="cat">
                    <h4>Categories</h4>
                    <p>Design</p>
                    <p>Development</p>
                </div>
                <div className="com">
                    <h4>Company Info</h4>
                    <p>About Us</p>
                    <p>Our Partners</p>
                    <p>Blog</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
