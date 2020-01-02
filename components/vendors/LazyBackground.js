import React, { useState, useEffect } from "react";

const LazyBackground = props => {
  const [src, setSrc] = useState(null);

  const loadedStyles = {
    background: `
    ${props.gradient ? props.gradient + "," : ""}
    url("${src}") top left / cover no-repeat`,
    filter: "blur(0)"
  };

  let loadingStyles = {
    width: "100%",
    height: "auto",
    filter: "blur(10px)",
    transition: "filter 0.7s"
  };

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = props.backgroundImg;

    imageLoader.onload = () => {
      setSrc(imageLoader.src);
    };
    return () => {
      if (imageLoader) {
        imageLoader.onload = null;
      }
    };
  }, []);
  return (
    <div style={Object.assign({}, loadingStyles, src ? loadedStyles : {})}>
      {props.children}
    </div>
  );
};

export default LazyBackground;
