import React from "react";
import ArticleCard from "../ArticleCard";
import viasatImage from "../../assets/VUR.png";
import article2Image from "../../assets/Article2.png";

function Articles() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
  {/* Heading */}
  <h2 className="text-2xl font-bold mb-10 text-neutral-400 tracking-widest">
       My WRITEUPS
      </h2>

  {/* Articles */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
    <ArticleCard
      title="Defending the Skies: Viasat's Battle Against Russian Hackers"
      image={viasatImage}
      summary={
        <>
          <p className="text-lg font-bold mb-2">🚀 Hack on Satellites? 🤯</p>
          <p>
            Unravel the epic tale that shook the world during the Russia-Ukraine
            war — and discover what it means for the future of space security.
          </p>
        </>
      }
      link="https://www.linkedin.com/pulse/defending-skies-viasats-battle-against-russian-hackers-hex20-6qpnc/"
    />

    <ArticleCard
      title="A Decade of Cybersecurity Challenges and Solutions for Satellite Systems"
      image={article2Image}
      summary={
        <>
          <p>
            🛰️ The space industry has seen a remarkable transformation in the
            last decade — but with more satellites in orbit than ever, the
            threats they face are also increasing.
          </p>
          <p>
            ✨ Join me as I dive into the unique challenges of securing space
            technology — and explore what it means for the future of the final
            frontier!
          </p>
        </>
      }
      link="https://www.linkedin.com/pulse/decade-cybersecurity-challenges-solutions-satellite-systems-hex20/"
    />
  </div>
</div>

  
  );
}

export default Articles;
