import Navbar from '../components/Navbar'
import CategoriaSlider from '../components/CategoriaSlider'

const accion = [
  { id: 1, titulo: 'SHELTER', imagen: 'https://pics.filmaffinity.com/shelter-235138105-large.jpg', trailer:'https://www.youtube.com/embed/4h7uFYvqYUc?si=HKGJdv-g86Lu4UGk' },
  { id: 2, titulo: 'EL SOBREVIVIENTE', imagen: 'https://pics.filmaffinity.com/the_running_man-814684798-msmall.jpg', trailer:'https://www.youtube.com/embed/o9GALAFGJSw?si=XOyU-TFcAXLMhR8e' },
  { id: 3, titulo: 'SIN PIEDAD', imagen: 'https://pics.filmaffinity.com/mercy-236747908-msmall.jpg', trailer:'https://www.youtube.com/embed/rqGUjlRSObo?si=Ney6-20F7FaXd9kN' },
  { id: 4, titulo: 'MISION IMPOSIBLE: La Sentencia Final', imagen: 'https://pics.filmaffinity.com/mission_impossible_the_final_reckoning-565388979-msmall.jpg', trailer:'https://www.youtube.com/embed/B8-eBVeEBFA?si=lPu4a9P9LLWseAov' },
  { id: 5, titulo: 'RIESGO BAJO CERO', imagen: 'https://pics.filmaffinity.com/ice_road_vengeance-423768629-msmall.jpg', trailer:'https://www.youtube.com/embed/pjuHjb1al8k?si=4cNlULAsI-1zwO9a' },
  { id: 6, titulo: 'BAILARINA', imagen: 'https://pics.filmaffinity.com/from_the_world_of_john_wick_ballerina-660408782-msmall.jpg', trailer:'https://www.youtube.com/embed/Qfb9ea2ijBA?si=0HuJz1jxexH6YMto' },
  { id: 7, titulo: 'EL AMATEUR', imagen: 'https://pics.filmaffinity.com/the_amateur-864303328-msmall.jpg', trailer:'https://www.youtube.com/embed/n63ig4J4vhM?si=At6vlO7wEy5FLX3D' },
  { id: 8, titulo: 'TRON ARES', imagen: 'https://pics.filmaffinity.com/tron_ares-548031766-msmall.jpg', trailer:'https://www.youtube.com/embed/nsLUwm8uCbc?si=P39XXnbFZ5gUYRM6' },
  { id: 9, titulo: 'SISU: Camino a la Venganza', imagen: 'https://pics.filmaffinity.com/sisu_2-601152489-msmall.jpg', trailer:'https://www.youtube.com/embed/KWjKnN5bdaw?si=PoWfsWNRtiHhqwSt' },
  { id: 10, titulo: 'JOHN WICK 4', imagen: 'https://pics.filmaffinity.com/john_wick_chapter_4-101402041-msmall.jpg', trailer:'https://www.youtube.com/embed/jziBnuYXfaI?si=P8yZsf0wfeCC-kQu' },
  { id: 11, titulo: 'F1', imagen: 'https://pics.filmaffinity.com/f1_the_movie-603739796-msmall.jpg', trailer:'https://www.youtube.com/embed/lJXEGGlBnY8?si=EvvsUamjVVrGMbqu' },
  { id: 12, titulo: 'CAPITAN AMERICA', imagen: 'https://pics.filmaffinity.com/captain_america_brave_new_world-589232463-msmall.jpg', trailer:'https://www.youtube.com/embed/IRJYr5hKO0o?si=9OhL1eB5kOydrzE2' },
  { id: 13, titulo: 'EL CONTADOR 2', imagen: 'https://pics.filmaffinity.com/the_accountant_2-296563604-msmall.jpg', trailer:'https://www.youtube.com/embed/hy_PixGsprI?si=k4ICxjKT2XJED9SI' },
  { id: 14, titulo: 'EL JUSTICIERO 3', imagen: 'https://pics.filmaffinity.com/the_equalizer_3-455060562-msmall.jpg', trailer:'https://www.youtube.com/embed/76FonPZHBvg?si=CPaKmIwVGfXKrfOR' },
  { id: 15, titulo: 'RESCATE IMPLACABLE', imagen: 'https://pics.filmaffinity.com/a_working_man-933343627-msmall.jpg', trailer:'https://www.youtube.com/embed/4xW5k83pPXg?si=F7CuxxwAwfyYnexb' },
  { id: 16, titulo: 'DEPREDADOR', imagen: 'https://pics.filmaffinity.com/predator_badlands-767428270-msmall.jpg', trailer:'https://www.youtube.com/embed/CiVccjXaOms?si=Mgn5wFEeF2VXnMM1' },
  { id: 17, titulo: 'AQUAMAN y el Reino Perdido', imagen: 'https://pics.filmaffinity.com/aquaman_and_the_lost_kingdom-274178849-msmall.jpg', trailer:'https://www.youtube.com/embed/d-7ERzlo0Yc?si=yubQx9-Z8kW1nWvY' },
  { id: 18, titulo: 'RAPIDOS y FURIOSOS 10', imagen: 'https://pics.filmaffinity.com/fast_x-854185380-msmall.jpg', trailer:'https://www.youtube.com/embed/XGY_NsZnCuE?si=kXFjV35IVQM0GufE' },
  { id: 19, titulo: 'MISION DE RESCATE 2', imagen: 'https://pics.filmaffinity.com/extraction_2-640259780-msmall.jpg', trailer:'https://www.youtube.com/embed/-RQOwDP3YlA?si=gPTK_Lywhrrjsz_L' },
  { id: 20, titulo: 'ALERTA EXTREMA', imagen: 'https://pics.filmaffinity.com/plane-349391874-msmall.jpg', trailer:'https://www.youtube.com/embed/dIxksjh3J5E?si=QWPZ_iq94uJ3OeBf' },
]

function Home() {
  return (
    <>
      <Navbar />
      <h1>Home de pelís</h1>
      <CategoriaSlider titulo="Películas de Acción" peliculas={accion} />
    </>
  )
}

export default Home