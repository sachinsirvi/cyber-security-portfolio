import React from "react";
import PropTypes from "prop-types";

const TMDB_BASE = "https://image.tmdb.org/t/p/";

// High-contrast placeholders for Lighthouse (with correct aspect ratios)
const portraitFallback =
  "https://placehold.co/300x450/000000/FFFFFF?text=No+Image&font=roboto"; // 2:3 ratio
const landscapeFallback =
  "https://placehold.co/1280x720/000000/FFFFFF?text=No+Image&font=roboto"; // 16:9 ratio

function ImageWithFallback({
  path,
  alt = "Movie poster",        
  className = "",              
  isPortrait = false,           
  loading = "lazy",            
  fetchpriority = "auto",      
}) {
  const fallbackUrl = isPortrait ? portraitFallback : landscapeFallback;

  // intrinsic sizes (prevents CLS)
  const width = isPortrait ? 300 : 1280;
  const height = isPortrait ? 450 : 720;

  if (!path) {
    return (
      <img
        src={fallbackUrl}
        alt={alt || "Poster not available"}
        className={`${className} object-cover`}
        loading={loading}
        decoding="async"
        fetchpriority={fetchpriority}
        width={width}
        height={height}
      />
    );
  }

  // Default size
  const defaultSize = isPortrait ? "w300" : "w780";
  const imageSrc = `${TMDB_BASE}${defaultSize}${path}`;

  // Responsive srcSet
  const srcSet = isPortrait
    ? `
      ${TMDB_BASE}w154${path} 154w,
      ${TMDB_BASE}w185${path} 185w,
      ${TMDB_BASE}w300${path} 300w,
      ${TMDB_BASE}w500${path} 500w
    `
    : `
      ${TMDB_BASE}w342${path} 342w,
      ${TMDB_BASE}w500${path} 500w,
      ${TMDB_BASE}w780${path} 780w,
      ${TMDB_BASE}w1280${path} 1280w
    `;

  const sizes = isPortrait
    ? "(max-width: 640px) 185px, (max-width: 1024px) 300px, 500px"
    : "(max-width: 768px) 342px, (max-width: 1280px) 780px, 1280px";

  return (
    <img
      src={imageSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`${className} object-cover`}
      loading={loading}
      decoding="async"
      fetchpriority={fetchpriority}
      width={width}
      height={height} 
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
  fetchpriority: PropTypes.oneOf(["high", "low", "auto"]),
};

export default ImageWithFallback;
