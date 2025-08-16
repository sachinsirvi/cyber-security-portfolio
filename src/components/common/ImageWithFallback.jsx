import React from "react";
import PropTypes from "prop-types";

const portraitUrl = "https://placehold.co/300x450?text=No+Image&font=roboto";
const landscapeUrl = "https://placehold.co/640x360?text=No+Image&font=roboto";

function ImageWithFallback({
  src,
  alt,
  className,
  isPortrait,
  loading = "lazy",
  fetchpriority
}) {
  const fallbackUrl = isPortrait ? portraitUrl : landscapeUrl;

// default size instead of original
  const srcBase = isPortrait ? "w500" : "w780";
  const imageSrc = src
    ? src.replace("/original", `/${srcBase}`)
    : fallbackUrl;

  // responsive options
  const srcSet = src
    ? `
      ${src.replace("/original", "/w300")} 300w,
      ${src.replace("/original", "/w500")} 500w,
      ${src.replace("/original", "/w780")} 780w,
      ${src.replace("/original", "/w1280")} 1280w
    `
    : null;

  const sizes = isPortrait
    ? "(max-width: 768px) 140px, 300px"
    : "(max-width: 768px) 360px, (max-width: 1280px) 780px, 1280px";

  return (
    <img
      src={imageSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading}
      fetchpriority={fetchpriority}
      className={`${className} object-cover`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackUrl;
      }}
    />
  );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  isPortrait: PropTypes.bool,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  fetchpriority: PropTypes.oneOf(["high", "low", "auto"])
};

ImageWithFallback.defaultProps = {
  alt: "Image not found",
  className: "",
  isPortrait: false,
  loading: "lazy",
  fetchpriority: "auto"
};

export default ImageWithFallback;
