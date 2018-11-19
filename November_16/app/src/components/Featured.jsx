import React from "react";
import Slider from "./Slider";

const Featured = () => (
  <div className="container">
    <div className="featured section">
      <span className="section__title">Featured</span>
      <div className="featured__header">
        <span className="featured__title">
          Making Ideas
          <br />
          Come To Life.
        </span>
        <div className="slide-count">
          <span className="slide__current">01/</span>
          <span className="slide__total">09</span>
        </div>
      </div>

      <Slider className="slider" images={images} />
      {/* <div className="slider">
        <SliderBtn
          className="slider-btn slider-btn--left"
          icon={<i className="slider-arrow fas fa-caret-left" />}
        />

        <button className="slider-btn slider-btn--left">
          <i className="slider-arrow fas fa-caret-left" />
        </button>

        <Img className="slide" src="/images/Pic_5.jpg" />
        <img className="slide" src="./Pic 5.jpg" alt="" />

        <SliderBtn
          className="slider-btn slider-btn--right"
          icon={<i className="slider-arrow fas fa-caret-right" />}
        />

        <button className="slider-btn slider-btn--right">
          <i className="slider-arrow fas fa-caret-right" />
        </button>
      </div> */}

      <div className="featured__body">
        <div className="featured__desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            fugiat quia odio laborum, harum consequatur ducimus minus delectus
            fugit iste. Pariatur dolore quos fugiat animi laborum amet,
            distinctio culpa facere!
          </p>
          <a className="btn--featured btn btn--reg" href="#">
            Case Study <i className="btn--arrow fas fa-caret-right" />
          </a>
        </div>
        <div className="featured__details">
          <div className="featured__detail featured__category">
            <span className="featured__detail--title">Category</span>
            <div className="featured__detail--body">
              Design &amp;
              <br />
              Branding
            </div>
          </div>
          <div className="featured__detail featured__client">
            <span className="featured__detail--title">Client</span>
            <div className="featured__detail--body">
              Cusco
              <br />
              Barista
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
