import React from "react";
import { Link } from "react-router-dom";


function ArticleCard({ title, image, summary, link, internal = false }) {
  const Wrapper = internal ? Link : "a";

  return (
    <Wrapper
      to={internal ? link : undefined}
      href={!internal ? link : undefined}
      target={!internal ? "_blank" : undefined}
      rel={!internal ? "noopener noreferrer" : undefined}
      className="flex flex-col rounded-lg border border-green-800 shadow-green-600 overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_20px_3px_rgba(255,215,0,0.5)] transition-transform"
    >
      {image && <img src={image} alt={title} className="h-48 w-full object-cover" />}

      <div className="p-6 flex flex-col justify-between flex-1">
        <h3 className="text-xl font-bold mb-3 text-green-500">{title}</h3>
        <div className="text-gray-300 text-sm space-y-2">{summary}</div>
      </div>
    </Wrapper>
  );
}

export default ArticleCard; // 👈 Make sure this line exists
