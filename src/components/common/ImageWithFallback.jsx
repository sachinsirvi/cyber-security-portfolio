import React from "react";
import PropTypes from "prop-types";

const TMDB_BASE = "https://image.tmdb.org/t/p/";
const portraitFallback = "https://placehold.co/300x450?text=No+Image&font=roboto";
const landscapeFallback = "https://placehold.co/640x360?text=No+Image&font=roboto";

function ImageWithFallback({
  path, //(poster_path or backdrop_path)
  alt,
  className,
  isPortrait,
  loading = "lazy",
  fetchpriority = "auto"
}) {
  const fallbackUrl = isPortrait ? portraitFallback : landscapeFallback;

  if (!path) {
    return (
      <img
        src={fallbackUrl}
        alt={alt}
        className={`${className} object-cover`}
      />
    );
  }

  // Pick default sizes
  const defaultSize = isPortrait ? "w500" : "w780";
  const imageSrc = `${TMDB_BASE}${defaultSize}${path}`;

  // srcSet for responsive images
  const srcSet = isPortrait
    ? `
      ${TMDB_BASE}w200${path} 200w,
      ${TMDB_BASE}w300${path} 300w,
      ${TMDB_BASE}w500${path} 500w
    `
    : `
      ${TMDB_BASE}w300${path} 300w,
      ${TMDB_BASE}w780${path} 780w,
      ${TMDB_BASE}w1280${path} 1280w
    `;

  // sizes attribute → helps browser pick correct image
  const sizes = isPortrait
    ? "(max-width: 640px) 140px, (max-width: 1024px) 200px, 300px"
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
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackUrl;
      }}
    />
  );
}

ImageWithFallback.propTypes = {
  path: PropTypes.string,  
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
