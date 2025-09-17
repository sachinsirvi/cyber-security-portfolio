import React from "react";
import ArticleCard from "../ArticleCard";
import { articles } from "../../data/writeups";

function Articles() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            image={article.image}
            summary={article.summary}
            link={article.external ? article.link : `/writeups/${article.id}`} // 👈 dynamic path
            internal={!article.external}
          />
        ))}
      </div>
    </div>
  );
}

export default Articles;
