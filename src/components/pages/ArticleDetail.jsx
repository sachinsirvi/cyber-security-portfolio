// pages/ArticleDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../data/writeups";

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <div className="text-white">Article not found.</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      {article.image && (
        <img src={article.image} alt={article.title} className="max-w-2xl mb-6" />
      )}
      <div className="max-w-2xl text-lg space-y-4">
        {article.content || <p>Coming soon...</p>}
      </div>
    </div>
  );
}

export default ArticleDetail;
