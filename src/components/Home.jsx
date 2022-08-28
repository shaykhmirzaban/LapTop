import React from "react";
import { Link, useNavigate } from "react-router-dom";

// styling
import "../style/Home.css";
// Components
import Products from "./Products";
import CustomerReview from "./CustomerReview";

const Home = () => {
  let navigate = useNavigate();
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      var mybutton = document.getElementById("myBtn");
      mybutton.style.transform = "scale(1)";
    } else {
      var mybutton = document.getElementById("myBtn");
      mybutton.style.transform = "scale(0)";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <React.StrictMode>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>
      <section className="cover">
        <h1>Awesome Laptop </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel
          molestiae iusto unde deserunt reiciendis rem et quisquam error?
          Commodi ea saepe quibusdam? Veniam,
        </p>
        <button onClick={() => {navigate("cards")}}>Buy Now</button>
      </section>
      <section className="aboutUS">
        <div className="col1"></div>
        <div className="col2">
          <h1>About US</h1>
          <p>
            We provide best product we happy our customer from 3+year
            Alhamdulillah we get positive response customer our customer all
            over the world. If you place your order so we try to deliver as soon
            as possible. Our main branch is located Pakistan in City of Karachi.
            If your product has any type of problem so you replace it fill some
            form.
          </p>
          <button onClick={() => {navigate("/detail")}}>learn More</button>
        </div>
      </section>
      <section className="product">
        <Products />
      </section>
      <section className="label">
        <div className="labelCenter">
          <div className="col1">
            <img src="./src/assets/images/sofa2.jpg" alt="" />
          </div>
          <div className="col2">
            <h1>New Laptop X12S3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              distinctio facere architecto veritatis a excepturi quibusdam quam
              hic harum impedit ducimus dolores, repellendus necessitatibus
              libero molestiae, illo, eligendi velit eos.
            </p>
            <Link to="/detail">Buy Now</Link>
          </div>
        </div>
      </section>
      <CustomerReview />
    </React.StrictMode>
  );
};

export default Home;
