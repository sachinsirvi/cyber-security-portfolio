# 🎬 Premiere.AI  

**Premiere.AI** is a premium, sleek **movies & TV shows discovery platform** built with **React + Vite**.  
It delivers a **fast, responsive, and accessible UI** powered by the **TMDB API**, featuring:  
- Watchlist management  
- AI assistant placeholder (ChatGPT-style integration ready)  

**Live Demo:** [premiere-ai.netlify.app](https://premiere-ai.netlify.app/)  



---

## Features

- **Explore Movies & TV Shows** – Browse trending, top-rated, and popular titles from [TMDB](https://www.themoviedb.org/documentation/api)  
- **Smart Search** – Find movies & shows instantly  
- **Personal Watchlist** – Save and manage your favorite titles  
- **Fully Responsive** – Optimized for mobile, tablet, and desktop  
- **High Performance** – Optimized with lazy loading, caching, and image fallbacks  
- **AI Assistant (UI Ready)** – Chatbot placeholder for **OpenAI integration**  
- **Premium UI/UX** – Smooth hover effects, loading spinners, accessibility support  

---

## Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/)  
- **Routing:** [React Router](https://reactrouter.com/)  
- **Icons:** [Font Awesome](https://fontawesome.com/)  
- **API:** [TMDB](https://www.themoviedb.org/)  
- **Hosting:** [Netlify](https://www.netlify.com/)  

---

## Lighthouse Scores

| Category        | Score |
|-----------------|-------|
| 🚀 Performance  | 92+   |
| ♿ Accessibility | 94+   |
| ✅ Best Practices | 100 |
| 🌐 SEO          | 100 |

---

## 🛠️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/premiere-ai.git

# Enter project folder
cd premiere-ai

# Install dependencies
npm install

# Create .env file in root and add:
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_ACCESS_TOKEN=your_tmdb_access_token

# Start dev server
npm run dev

# Build for production
npm run build
