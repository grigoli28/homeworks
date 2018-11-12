import React, { Component } from "react";
import Slide from "./components/Slide";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://placekitten.com/700/700",
        "https://placekitten.com/700/700",
        "https://placekitten.com/700/700",
        "https://placekitten.com/700/700"
      ],
      currentSlide: 0,
      translateValue: 0
    };
  }

  prevSlide = () => {};

  nextSlide = () => {};

  render() {
    return (
      <div className="slider">
        <div
          className="slider__container"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-in-out 450ms"
          }}
        >
          {this.state.images.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </div>

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}

export default App;
