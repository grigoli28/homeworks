import React from "react";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `${image}`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%"
  };
  return <div className="slide" style={styles}/>;
};

export default Slide;
