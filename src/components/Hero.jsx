import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const featuredMovies = [
  {
    id: 21,
    title: "AVENGERS: ENDGAME",
      image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
      trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    id: 22,
    title: "BATMAN",
    
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
       trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
  },
  {
    id: 23,
    title: "INTERSTELLAR",
    
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
];

export default function Hero() {
  const [currentMovie, setCurrentMovie] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!featuredMovies.length) return null;

  const activeMovie = featuredMovies[currentMovie];

  const irADetalle = () => {
    navigate(`/detalle/${activeMovie.id}`);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${activeMovie.image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <span className="hero-tag">Película destacada</span>
          <h1>{activeMovie.title}</h1>
          <p>{activeMovie.description}</p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => window.open(activeMovie.trailer, "_blank")}>
               Ver ahora
            </button>
            <button className="btn-secondary" onClick={irADetalle}>
               Más información
            </button>
          </div>


          <div className="hero-dots">
            {featuredMovies.map((movie, index) => (
              <button
                key={movie.id}
                type="button"
                className={currentMovie === index ? "dot active" : "dot"}
                onClick={() => setCurrentMovie(index)}
                aria-label={`Mostrar película ${movie.title}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}