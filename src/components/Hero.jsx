import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const featuredMovies = [
  {
    id: 2,
    title: "AVENGERS: ENDGAME",
    description:
      "Después de los eventos devastadores causados por Thanos, los Vengadores restantes deben reunirse para restaurar el equilibrio del universo.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    title: "BATMAN",
    description:
      "Bruce Wayne regresa para proteger Gotham de una nueva amenaza que pone en riesgo a toda la ciudad.",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    title: "INTERSTELLAR",
    description:
      "Un grupo de exploradores viaja más allá de nuestra galaxia en busca de un nuevo hogar para la humanidad.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1600&q=80",
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

  const goToDetail = () => {
    navigate(`/detalle/${activeMovie.id}`);
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${activeMovie.image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">         
          <h1>{activeMovie.title}</h1>
          <p>{activeMovie.description}</p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={goToDetail}>
               Ver ahora
            </button>
            <button className="btn-secondary" onClick={goToDetail}>
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