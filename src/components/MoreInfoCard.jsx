import React from "react";

function MoreInfoCard({ title, subtitle, link, description, image }) {
  const CardContent = (
    <div className="flex flex-col justify-start items-center border border-green-700 rounded-lg p-4 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_2px_rgba(34,197,94,0.5)] h-full">
      {/* Image */}
      {image && (
        <div className="w-full aspect-[3/4] overflow-hidden rounded-md mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Title & Subtitle */}
      <h3 className="text-xl font-semibold text-green-500 mb-1 text-center">
        {title}
      </h3>
      <p className="text-neutral-200 font-medium mb-3 text-center">
        {subtitle}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center flex-grow">{description}</p>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}

export default MoreInfoCard;
