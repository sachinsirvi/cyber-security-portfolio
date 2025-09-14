import React from "react";

function SkillCard({ title, icon: Icon, items, shadowColor, badgeStyle = false }) {
  return (
    <div
      className={`flex flex-col justify-center items-center border border-green-700 rounded-lg p-6 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300`}
    >
      {/* Icon */}
      {Icon && <Icon className="text-5xl mb-4" style={{ color: shadowColor }} />}

      {/* Title */}
      <h3 className="text-xl font-semibold text-green-500 mb-4 text-center">
        {title}
      </h3>

      {/* Items */}
      {badgeStyle ? (
        <div className="flex flex-wrap justify-center gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-200 text-xs sm:text-sm px-3 py-1 rounded-full border border-gray-700  transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <ul className="text-gray-300 text-sm text-center space-y-1">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillCard;
