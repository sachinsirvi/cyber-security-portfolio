// src/data/articles.js
import viasatImage from "../assets/VUR.png";
import article2Image from "../assets/Article2.png";

export const articles = [
  // viasat article
  {
    id: "viasat-battle",
    title: "Defending the Skies: Viasat's Battle Against Russian Hackers",
    image: viasatImage,
    summary: (
      <>
        <p className="text-lg font-bold mb-2">🚀 Hack on Satellites? 🤯</p>
        <p>
          Unravel the epic tale that shook the world during the Russia-Ukraine
          war — and discover what it means for the future of space security.
        </p>
      </>
    ),
    link:
      "https://www.linkedin.com/pulse/defending-skies-viasats-battle-against-russian-hackers-hex20-6qpnc/",
    external: true, 
  },
  // cybersecurity-decade article
  {
    id: "cybersecurity-decade",
    title: "A Decade of Cybersecurity Challenges and Solutions for Satellite Systems",
    image: article2Image,
    summary: (
      <>
        <p>🛰️ The space industry has seen a remarkable transformation...</p>
        <p>✨ Join me as I dive into the unique challenges...</p>
      </>
    ),
    link:
      "https://www.linkedin.com/pulse/decade-cybersecurity-challenges-solutions-satellite-systems-hex20/",
    external: true, // opens in a new tab
  },
  // test article (internal)
  {
    id: "test",
    title: "A Test",
    image: article2Image,
    summary: <p>🛰️ This one opens inside the app.</p>,
    external: false,
    content: (
      <>
        <p>This is the detailed view for the "Test" article.</p>
        <p>
          You can add as much content as you want here — text, images, code
          snippets, etc.
        </p>
      </>
    ),
  },
  {
    id: "test2",
    title: "A Test 2",
    image: article2Image,
    summary: <p>🛰️ This one opens inside the app.</p>,
    external: false,
    content: (
      <>
        <p>This is the detailed view for the "Test" article.</p>
        <p>
          You can add as much content as you want here — text, images, code
          snippets, etc.
        </p>
      </>
    ),
  },
  {
    id: "test3",
    title: "A Test 3",
    image: article2Image,
    summary: <p>🛰️ This one opens rewdw inside the app.</p>,
    external: false,
    content: (
      <>
        <p>This is the detailed view for the "Test" article.</p>
        <p>
          You can add as much content as you want here — text, images, code
          snippets, etc.
        </p>
      </>
    ),
  },
];
