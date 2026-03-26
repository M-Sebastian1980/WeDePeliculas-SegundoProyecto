import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const featuredMovies = [
{
    id: 2,
    title: "AVENGERS: ENDGAME",
    description:
      "Después de los eventos devastadores causados por Thanos, los Vengadores restantes deben reunirse para restaurar el equilibrio del universo.",
    image:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },


{
    id: 3,
    title: "BATMAN",
    description:
      "Bruce Wayne regresa para proteger Gotham de una nueva amenaza que pone en riesgo a toda la ciudad.",
    image:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
{
    id: 4,
    title: "INTERSTELLAR",
    description:
      "Un grupo de exploradores viaja más allá de nuestra galaxia en busca de un nuevo hogar para la humanidad.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
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