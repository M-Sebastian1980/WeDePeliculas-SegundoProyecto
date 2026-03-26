import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const featuredMovies = [
{
    id: 21,
    title: "AVENGERS: ENDGAME",
    description:
      "",
    image:
      "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },


{
    id: 22,
    title: "BATMAN",
    description:
      "",
    image:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
{
    id: 23,
    title: "INTERSTELLAR",
    description:
      "",
    image:
      "https://framerusercontent.com/images/LaWlbEkrTmKgHyJrmjajVfD3I.jpg?width=967&height=544",
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
            {/* <button className="btn-secondary" onClick={goToDetail}>
               Más información
            </button> */}
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