import React from "react";
const portraitUrl = "https://placehold.co/300x450?text=No+Image&font=roboto";
const landscapeUrl = "https://placehold.co/640x360?text=No+Image&font=roboto";

function ImageWithFallback({ src, alt, className, isPortrait}) {
  const fallbackUrl = isPortrait ? portraitUrl : landscapeUrl;
  return (
    <img
      src={src || fallbackUrl}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallbackUrl;
      }}
    />
  );
}

export default ImageWithFallback;
