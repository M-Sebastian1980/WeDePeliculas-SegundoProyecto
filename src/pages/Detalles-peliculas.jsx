import { useParams, useNavigate } from "react-router-dom";
import "./Detalles-peliculas.css";

const movies = [
  {
    id: 1,
    titulo: "SHELTER",
    imagen: "./src/assets/img/portadas/accion/01.jpg",
    trailer: "https://www.youtube.com/embed/4h7uFYvqYUc",
    descripcion: "Un hombre deberá sobrevivir mientras enfrenta una amenaza inesperada."
  },
  {
    id: 2,
    titulo: "EL SOBREVIVIENTE",
    imagen: "./src/assets/img/portadas/accion/02.jpg",
    trailer: "https://www.youtube.com/embed/o9GALAFGJSw",
    descripcion: "Tras una misión fallida, un soldado lucha por mantenerse con vida mientras es perseguido por sus enemigos."
  },
  {
    id: 3,
    titulo: "SIN PIEDAD",
    imagen: "./src/assets/img/portadas/accion/03.jpg",
    trailer: "https://www.youtube.com/embed/rqGUjlRSObo",
    descripcion: "Un hombre busca venganza sin límites en una historia cargada de violencia y justicia personal."
  },
  {
    id: 4,
    titulo: "MISION IMPOSIBLE: La Sentencia Final",
    imagen: "./src/assets/img/portadas/accion/04.jpg",
    trailer: "https://www.youtube.com/embed/B8-eBVeEBFA",
    descripcion: "Ethan Hunt enfrenta su misión más peligrosa, donde el destino del mundo está en juego."
  },
  {
    id: 5,
    titulo: "RIESGO BAJO CERO",
    imagen: "./src/assets/img/portadas/accion/05.jpg",
    trailer: "https://www.youtube.com/embed/pjuHjb1al8k",
    descripcion: "Un conductor debe transportar una carga vital a través de un terreno helado y extremadamente peligroso."
  },
  {
    id: 6,
    titulo: "BAILARINA",
    imagen: "./src/assets/img/portadas/accion/06.jpg",
    trailer: "https://www.youtube.com/embed/Qfb9ea2ijBA",
    descripcion: "Una asesina entrenada busca venganza mientras se mueve en un mundo lleno de secretos y violencia."
  },
  {
    id: 7,
    titulo: "EL AMATEUR",
    imagen: "./src/assets/img/portadas/accion/07.jpg",
    trailer: "https://www.youtube.com/embed/n63ig4J4vhM",
    descripcion: "Un hombre común se ve obligado a convertirse en espía para descubrir la verdad detrás de una conspiración."
  },
  {
    id: 8,
    titulo: "TRON ARES",
    imagen: "./src/assets/img/portadas/accion/08.jpg",
    trailer: "https://www.youtube.com/embed/nsLUwm8uCbc",
    descripcion: "Un programa de inteligencia artificial cruza al mundo real, desatando un conflicto entre humanos y tecnología."
  },
  {
    id: 9,
    titulo: "SISU: Camino a la Venganza",
    imagen: "./src/assets/img/portadas/accion/09.jpg",
    trailer: "https://www.youtube.com/embed/KWjKnN5bdaw",
    descripcion: "Un solitario buscador de oro se enfrenta a un grupo de soldados en una brutal historia de supervivencia."
  },
  {
    id: 10,
    titulo: "JOHN WICK 4",
    imagen: "./src/assets/img/portadas/accion/10.jpg",
    trailer: "https://www.youtube.com/embed/jziBnuYXfaI",
    descripcion: "John Wick continúa su lucha contra la Alta Mesa en una guerra que no parece tener fin."
  },
  {
    id: 11,
    titulo: "F1",
    imagen: "./src/assets/img/portadas/accion/11.jpg",
    trailer: "https://www.youtube.com/embed/lJXEGGlBnY8",
    descripcion: "Un piloto regresa al mundo de la Fórmula 1 para demostrar que aún tiene lo necesario para competir al más alto nivel."
  },
  {
    id: 12,
    titulo: "CAPITAN AMERICA",
    imagen: "./src/assets/img/portadas/accion/12.jpg",
    trailer: "https://www.youtube.com/embed/IRJYr5hKO0o",
    descripcion: "El nuevo Capitán América deberá enfrentarse a amenazas globales que ponen en riesgo la estabilidad mundial."
  },
  {
    id: 13,
    titulo: "EL CONTADOR 2",
    imagen: "./src/assets/img/portadas/accion/13.jpg",
    trailer: "https://www.youtube.com/embed/hy_PixGsprI",
    descripcion: "Un contador con habilidades especiales vuelve a involucrarse en una peligrosa red criminal."
  },
  {
    id: 14,
    titulo: "EL JUSTICIERO 3",
    imagen: "./src/assets/img/portadas/accion/14.jpg",
    trailer: "https://www.youtube.com/embed/76FonPZHBvg",
    descripcion: "Robert McCall regresa para impartir justicia a quienes no respetan las reglas."
  },
  {
    id: 15,
    titulo: "RESCATE IMPLACABLE",
    imagen: "./src/assets/img/portadas/accion/15.jpg",
    trailer: "https://www.youtube.com/embed/4xW5k83pPXg",
    descripcion: "Un equipo de rescate enfrenta una misión imposible donde cada segundo cuenta."
  },
  {
    id: 16,
    titulo: "DEPREDADOR",
    imagen: "./src/assets/img/portadas/accion/16.jpg",
    trailer: "https://www.youtube.com/embed/CiVccjXaOms",
    descripcion: "Un cazador alienígena acecha a sus presas humanas en una lucha por la supervivencia."
  },
  {
    id: 17,
    titulo: "AQUAMAN y el Reino Perdido",
    imagen: "./src/assets/img/portadas/accion/17.jpg",
    trailer: "https://www.youtube.com/embed/d-7ERzlo0Yc",
    descripcion: "Aquaman deberá unir fuerzas para proteger Atlantis de una amenaza ancestral."
  },
  {
    id: 18,
    titulo: "RAPIDOS y FURIOSOS 10",
    imagen: "./src/assets/img/portadas/accion/18.jpg",
    trailer: "https://www.youtube.com/embed/XGY_NsZnCuE",
    descripcion: "Dom y su familia enfrentan su desafío más grande en una carrera contra el tiempo."
  },
  {
    id: 19,
    titulo: "MISION DE RESCATE 2",
    imagen: "./src/assets/img/portadas/accion/19.jpg",
    trailer: "https://www.youtube.com/embed/-RQOwDP3YlA",
    descripcion: "Tyler Rake regresa para una nueva misión llena de peligro y acción extrema."
  },
  {
    id: 20,
    titulo: "ALERTA EXTREMA",
    imagen: "./src/assets/img/portadas/accion/20.jpg",
    trailer: "https://www.youtube.com/embed/dIxksjh3J5E",
    descripcion: "Un piloto deberá proteger a sus pasajeros tras un aterrizaje de emergencia en territorio hostil."
  },
    {
  id: 21,
  titulo: "AVENGERS: ENDGAME",
  descripcion:
    "Después de los eventos devastadores causados por Thanos, los Vengadores restantes deben reunirse para restaurar el equilibrio del universo.",
  imagen:
    "https://m.media-amazon.com/images/S/pv-target-images/05be32e45305f6000e673b96badcdfd60302f77d29ae350f17dd6044be5f57ee.jpg",
  trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
},
{
  id: 22,
  titulo: "BATMAN",
  descripcion:
    "Bruce Wayne regresa para proteger Gotham de una nueva amenaza que pone en riesgo a toda la ciudad.",
  imagen:
    "https://alfabetajuega.com/hero/2024/03/batman-el-caballero-de-la-noche-joker.jpg?width=768&aspect_ratio=16:9&format=nowebp",
  trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
},
{
  id: 23,
  titulo: "INTERSTELLAR",
  descripcion:
    "Un grupo de exploradores viaja más allá de nuestra galaxia en busca de un nuevo hogar para la humanidad.",
  imagen:
    "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXlGE_81TVyWadhxe1mRoHwHbu-k4-niKIcCPL3MDPgdSBfNsSxNF1HqtOZDu5czYMzMY_Z2a7S08C1RGwI_CX0z-MAR-a1dVdHz.jpg?r=835",
  trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
},
];

export default function Detalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="detalle-not-found">
        <h2>Película no encontrada</h2>
        <button onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

  return (
    <section
      className="detalle"
      style={{ backgroundImage: `url(${movie.imagen})` }}
    >
      <div className="detalle-overlay"></div>

      <div className="detalle-content">
        <span className="detalle-tag">Película</span>

        <h1>{movie.titulo}</h1>

        <p>{movie.descripcion}</p>

        <div className="detalle-buttons">
          <button
            className="detalle-btn-primary"
            onClick={() => window.open(movie.trailer, "_blank")}
          >
            ▶ Ver trailer
          </button>

          <button
            className="detalle-btn-secondary"
            onClick={() => navigate("/")}
          >
            ⬅ Volver
          </button>
        </div>
      </div>

      <div className="detalle-trailer-container">
        <div className="detalle-trailer">
          <iframe
            src={movie.trailer}
            title={movie.titulo}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}