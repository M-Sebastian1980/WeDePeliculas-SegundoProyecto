import Navbar from '../components/Navbar'
import CategoriaSlider from '../components/CategoriaSlider'
import Hero from '../components/Hero'
import Questions from "../components/Questions"
import Footer from "../components/Footer"

const accion = [
  { id: 1, titulo: 'SHELTER', imagen: './src/assets/img/portadas/accion/01.jpg', trailer:'https://www.youtube.com/embed/4h7uFYvqYUc?si=HKGJdv-g86Lu4UGk' },
  { id: 2, titulo: 'EL SOBREVIVIENTE', imagen: './src/assets/img/portadas/accion/02.jpg', trailer:'https://www.youtube.com/embed/o9GALAFGJSw?si=XOyU-TFcAXLMhR8e' },
  { id: 3, titulo: 'SIN PIEDAD', imagen: './src/assets/img/portadas/accion/03.jpg', trailer:'https://www.youtube.com/embed/rqGUjlRSObo?si=Ney6-20F7FaXd9kN' },
  { id: 4, titulo: 'MISION IMPOSIBLE: La Sentencia Final', imagen: './src/assets/img/portadas/accion/04.jpg', trailer:'https://www.youtube.com/embed/B8-eBVeEBFA?si=lPu4a9P9LLWseAov' },
  { id: 5, titulo: 'RIESGO BAJO CERO', imagen: './src/assets/img/portadas/accion/05.jpg', trailer:'https://www.youtube.com/embed/pjuHjb1al8k?si=4cNlULAsI-1zwO9a' },
  { id: 6, titulo: 'BAILARINA', imagen: './src/assets/img/portadas/accion/06.jpg', trailer:'https://www.youtube.com/embed/Qfb9ea2ijBA?si=0HuJz1jxexH6YMto' },
  { id: 7, titulo: 'EL AMATEUR', imagen: './src/assets/img/portadas/accion/07.jpg', trailer:'https://www.youtube.com/embed/n63ig4J4vhM?si=At6vlO7wEy5FLX3D' },
  { id: 8, titulo: 'TRON ARES', imagen: './src/assets/img/portadas/accion/08.jpg', trailer:'https://www.youtube.com/embed/nsLUwm8uCbc?si=P39XXnbFZ5gUYRM6' },
  { id: 9, titulo: 'SISU: Camino a la Venganza', imagen: './src/assets/img/portadas/accion/09.jpg', trailer:'https://www.youtube.com/embed/KWjKnN5bdaw?si=PoWfsWNRtiHhqwSt' },
  { id: 10, titulo: 'JOHN WICK 4', imagen: './src/assets/img/portadas/accion/10.jpg', trailer:'https://www.youtube.com/embed/jziBnuYXfaI?si=P8yZsf0wfeCC-kQu' },
  { id: 11, titulo: 'F1', imagen: './src/assets/img/portadas/accion/11.jpg', trailer:'https://www.youtube.com/embed/lJXEGGlBnY8?si=EvvsUamjVVrGMbqu' },
  { id: 12, titulo: 'CAPITAN AMERICA', imagen: './src/assets/img/portadas/accion/12.jpg', trailer:'https://www.youtube.com/embed/IRJYr5hKO0o?si=9OhL1eB5kOydrzE2' },
  { id: 13, titulo: 'EL CONTADOR 2', imagen: './src/assets/img/portadas/accion/13.jpg', trailer:'https://www.youtube.com/embed/hy_PixGsprI?si=k4ICxjKT2XJED9SI' },
  { id: 14, titulo: 'EL JUSTICIERO 3', imagen: './src/assets/img/portadas/accion/14.jpg', trailer:'https://www.youtube.com/embed/76FonPZHBvg?si=CPaKmIwVGfXKrfOR' },
  { id: 15, titulo: 'RESCATE IMPLACABLE', imagen: './src/assets/img/portadas/accion/15.jpg', trailer:'https://www.youtube.com/embed/4xW5k83pPXg?si=F7CuxxwAwfyYnexb' },
  { id: 16, titulo: 'DEPREDADOR', imagen: './src/assets/img/portadas/accion/16.jpg', trailer:'https://www.youtube.com/embed/CiVccjXaOms?si=Mgn5wFEeF2VXnMM1' },
  { id: 17, titulo: 'AQUAMAN y el Reino Perdido', imagen: './src/assets/img/portadas/accion/17.jpg', trailer:'https://www.youtube.com/embed/d-7ERzlo0Yc?si=yubQx9-Z8kW1nWvY' },
  { id: 18, titulo: 'RAPIDOS y FURIOSOS 10', imagen: './src/assets/img/portadas/accion/18.jpg', trailer:'https://www.youtube.com/embed/XGY_NsZnCuE?si=kXFjV35IVQM0GufE' },
  { id: 19, titulo: 'MISION DE RESCATE 2', imagen: './src/assets/img/portadas/accion/19.jpg', trailer:'https://www.youtube.com/embed/-RQOwDP3YlA?si=gPTK_Lywhrrjsz_L' },
  { id: 20, titulo: 'ALERTA EXTREMA', imagen: './src/assets/img/portadas/accion/20.jpg', trailer:'https://www.youtube.com/embed/dIxksjh3J5E?si=QWPZ_iq94uJ3OeBf' },
]

const terror = [
  { id: 21, titulo: 'DRACULA', imagen: './src/assets/img/portadas/terror/21.jpg' },
  { id: 22, titulo: 'EL SONIDO DE LA MUERTE', imagen: './src/assets/img/portadas/terror/22.jpg' },
  { id: 23, titulo: 'EL TELEFONO NEGRO', imagen: './src/assets/img/portadas/terror/23.jpg' },
  { id: 24, titulo: 'EL CONJURO 4', imagen: './src/assets/img/portadas/terror/24.jpg' },
  { id: 25, titulo: 'DESTINO FINAL 6', imagen: './src/assets/img/portadas/terror/25.jpg' },
  { id: 26, titulo: 'ALIENS ROMULUS', imagen: './src/assets/img/portadas/terror/26.jpg' },
  { id: 27, titulo: '28 AÑOS DESPUES', imagen: './src/assets/img/portadas/terror/27.jpg' },
  { id: 28, titulo: 'PRESENCIA', imagen: './src/assets/img/portadas/terror/28.jpg' },
  { id: 29, titulo: 'NOSFERATU', imagen: './src/assets/img/portadas/terror/29.jpg' },
  { id: 30, titulo: 'HAZ QUE REGRESE', imagen: './src/assets/img/portadas/terror/30.jpg' },
  { id: 31, titulo: 'COLECCIONISTA DE ALMAS', imagen: './src/assets/img/portadas/terror/31.jpg' },
  { id: 32, titulo: 'HEREJE', imagen: './src/assets/img/portadas/terror/32.jpg' },
  { id: 33, titulo: 'REGALO MALDITO', imagen: './src/assets/img/portadas/terror/33.jpg' },
  { id: 34, titulo: 'NO HABLES CON EXTRAÑOS', imagen: './src/assets/img/portadas/terror/34.jpg' },
  { id: 35, titulo: 'UN LUGAR EN SILENCIO', imagen: './src/assets/img/portadas/terror/35.jpg' },
  { id: 36, titulo: 'LA PRIMERA PROFECIA', imagen: './src/assets/img/portadas/terror/36.jpg' },
  { id: 37, titulo: 'OBSERVADOS', imagen: './src/assets/img/portadas/terror/37.jpg' },
  { id: 38, titulo: 'EL RIO DE LA MUERTE', imagen: './src/assets/img/portadas/terror/38.jpg' },
  { id: 39, titulo: 'INMACULADA', imagen: './src/assets/img/portadas/terror/39.jpg' },
  { id: 40, titulo: 'TERRIFER 3', imagen: './src/assets/img/portadas/terror/40.jpg' },
]

const romance = [
  { id: 41, titulo: 'A PESAR DE TI', imagen: './src/assets/img/portadas/romance/41.jpg' },
  { id: 42, titulo: 'AMOR', imagen: './src/assets/img/portadas/romance/42.jpg' },
  { id: 43, titulo: 'AMOR SIN BARRERAS', imagen: './src/assets/img/portadas/romance/43.jpg' },
  { id: 44, titulo: 'ENCANTADO DE CONOCERTE', imagen: './src/assets/img/portadas/romance/44.jpg' },
  { id: 45, titulo: 'YESTERDAY', imagen: './src/assets/img/portadas/romance/45.jpg' },
  { id: 46, titulo: 'UN AÑO Y UN DIA', imagen: './src/assets/img/portadas/romance/46.jpg' },
  { id: 47, titulo: 'PASAJE AL PARAISO', imagen: './src/assets/img/portadas/romance/47.jpg' },
  { id: 48, titulo: 'LOS HIJOS DE OTROS', imagen: './src/assets/img/portadas/romance/48.jpg' },
  { id: 49, titulo: 'EL MAPA QUE ME LLEVA A TI', imagen: './src/assets/img/portadas/romance/49.jpg' },
  { id: 50, titulo: 'ESA SEMANA JUNTOS', imagen: './src/assets/img/portadas/romance/50.jpg' },
  { id: 51, titulo: 'IMPERIO DE LUZ', imagen: './src/assets/img/portadas/romance/51.jpg' },
  { id: 52, titulo: 'BODAS DE PLOMO', imagen: './src/assets/img/portadas/romance/52.jpg' },
  { id: 53, titulo: 'CASATE CONMIGO', imagen: './src/assets/img/portadas/romance/53.jpg' },
  { id: 54, titulo: 'PERSUASION', imagen: './src/assets/img/portadas/romance/54.jpg' },
  { id: 55, titulo: 'MI POLICIA', imagen: './src/assets/img/portadas/romance/55.jpg' },
  { id: 56, titulo: 'UN ASUNTO PRIVADO', imagen: './src/assets/img/portadas/romance/56.jpg' },
  { id: 57, titulo: 'AMOR DE MENTIRAS', imagen: './src/assets/img/portadas/romance/57.jpg' },
  { id: 58, titulo: 'CORAZONES MALHERIDOS', imagen: './src/assets/img/portadas/romance/58.jpg' },
  { id: 59, titulo: 'LA IMPACIENCIA DEL COROZON', imagen: './src/assets/img/portadas/romance/59.jpg' },
  { id: 60, titulo: 'UNA CUESTION DE FE', imagen: './src/assets/img/portadas/romance/60.jpg' },
]

const comedia = [
  { id: 61, titulo: 'LA PISTOLA DESNUDA', imagen: './src/assets/img/portadas/comedia/61.jpg' },
  { id: 62, titulo: 'UN DIA FUERA DE CONTROL', imagen: './src/assets/img/portadas/comedia/62.jpg' },
  { id: 63, titulo: 'VIAJE DE FIN DE CURSO', imagen: './src/assets/img/portadas/comedia/63.jpg' },
  { id: 64, titulo: 'UN FUNERAL DE LOCOS', imagen: './src/assets/img/portadas/comedia/64.jpg' },
  { id: 65, titulo: 'OTRO PEQUEÑO FAVOR', imagen: './src/assets/img/portadas/comedia/65.jpg' },
  { id: 66, titulo: 'PLAN FAMILIAR 2', imagen: './src/assets/img/portadas/comedia/66.jpg' },
  { id: 67, titulo: 'OTRO VIERNES DE LOCOS', imagen: './src/assets/img/portadas/comedia/67.jpg' },
  { id: 68, titulo: 'ENCANTADO DE NO CONOCERTE', imagen: './src/assets/img/portadas/comedia/68.jpg' },
  { id: 69, titulo: 'MANTENIMIENTO REQUERIDO', imagen: './src/assets/img/portadas/comedia/69.jpg' },
  { id: 70, titulo: 'LA AGENCIA', imagen: './src/assets/img/portadas/comedia/70.jpg' },
  { id: 71, titulo: 'UNA ABOGADA BRILLANTE', imagen: './src/assets/img/portadas/comedia/71.jpg' },
  { id: 72, titulo: 'EL ULTIMO ENCARGO', imagen: './src/assets/img/portadas/comedia/72.jpg' },
  { id: 73, titulo: 'MINECRAFT', imagen: './src/assets/img/portadas/comedia/73.jpg' },
  { id: 74, titulo: 'LA MITAD QUE FALTA', imagen: './src/assets/img/portadas/comedia/74.jpg' },
  { id: 75, titulo: 'EL PAPEL', imagen: './src/assets/img/portadas/comedia/75.jpg' },
  { id: 76, titulo: 'EL NOVIO DE MAMÁ', imagen: './src/assets/img/portadas/comedia/76.jpg' },
  { id: 77, titulo: 'ANACONDA', imagen: './src/assets/img/portadas/comedia/77.jpg' },
  { id: 78, titulo: 'AMORES COMPARTIDOS', imagen: './src/assets/img/portadas/comedia/78.jpg' },
  { id: 79, titulo: 'DESASTRE EN FAMILIA', imagen: './src/assets/img/portadas/comedia/79.jpg' },
  { id: 80, titulo: 'BRIDGET JONES: LOCA POR ËL', imagen: '80' },
]

const drama = [
  { id: 81, titulo: 'LA NOVIA', imagen: './src/assets/img/portadas/drama/81.jpg' },
  { id: 82, titulo: 'UN FAMILIAR', imagen: './src/assets/img/portadas/drama/82.jpg' },
  { id: 83, titulo: 'LA FIERA', imagen: './src/assets/img/portadas/drama/83.jpg' },
  { id: 84, titulo: 'CUMBRES BORRASCOSAS', imagen: './src/assets/img/portadas/drama/84.jpg' },
  { id: 85, titulo: 'MUJERES IMPERFECTAS', imagen: './src/assets/img/portadas/drama/85.jpg' },
  { id: 86, titulo: 'EN UN ABRIR Y CERRRAR DE OJOS', imagen: './src/assets/img/portadas/drama/86.jpg' },
  { id: 87, titulo: 'PROYECTO FIN DEL MUNDO', imagen: './src/assets/img/portadas/drama/87.jpg' },
  { id: 88, titulo: 'SALVADOR', imagen: './src/assets/img/portadas/drama/88.jpg' },
  { id: 89, titulo: 'LA CAZA', imagen: './src/assets/img/portadas/drama/89.jpg' },
  { id: 90, titulo: 'CAMINOS DEL CRIMEN', imagen: './src/assets/img/portadas/drama/90.jpg' },
  { id: 91, titulo: 'EL INFIERNO DE LAS MUJERES', imagen: './src/assets/img/portadas/drama/91.jpg' },
  { id: 92, titulo: 'BAILANDO SOBRE HIELO', imagen: './src/assets/img/portadas/drama/92.jpg' },
  { id: 93, titulo: 'AMOR ANIMAL', imagen: './src/assets/img/portadas/drama/93.jpg' },
  { id: 94, titulo: 'EL MUSEO DE LA INOCENCIA', imagen: './src/assets/img/portadas/drama/94.jpg' },
  { id: 95, titulo: 'SOLO MIO', imagen: './src/assets/img/portadas/drama/95.jpg' },
  { id: 96, titulo: 'EN LA ZONA GRIS', imagen: './src/assets/img/portadas/drama/96.jpg' },
  { id: 97, titulo: 'LAS LOCAS DEL OBELISCO', imagen: './src/assets/img/portadas/drama/97.jpg' },
  { id: 98, titulo: 'JOVEN SECUESTRADA', imagen: './src/assets/img/portadas/drama/98.jpg' },
  { id: 99, titulo: 'NO TE OLVIDARE', imagen: './src/assets/img/portadas/drama/99.jpg' },
  { id: 100, titulo: 'LOS JUSTOS', imagen: './src/assets/img/portadas/drama/100.jpg' },
]

const cienciaFiccion = [
  { id: 101, titulo: 'SIN PIEDAD', imagen: './src/assets/img/portadas/sci-fy/101.jpg' },
  { id: 102, titulo: 'JURASSIC WORLD: Renace', imagen: './src/assets/img/portadas/sci-fy/102.jpg' },
  { id: 103, titulo: 'MICKEY 17', imagen: './src/assets/img/portadas/sci-fy/103.jpg' },
  { id: 104, titulo: 'CONTROL ROOM', imagen: './src/assets/img/portadas/sci-fy/104.jpg' },
  { id: 105, titulo: 'LOS 4 FANTASTICOS', imagen: './src/assets/img/portadas/sci-fy/105.jpg' },
  { id: 106, titulo: 'CAZADORES DEL FIN DEL MUNDO', imagen: './src/assets/img/portadas/sci-fy/106.jpg' },
  { id: 107, titulo: 'COMPAÑERA PERFECTA', imagen: './src/assets/img/portadas/sci-fy/107.jpg' },
  { id: 108, titulo: 'ASH', imagen: './src/assets/img/portadas/sci-fy/108.jpg' },
  { id: 109, titulo: 'TRON ARES', imagen: './src/assets/img/portadas/sci-fy/109.jpg' },
  { id: 110, titulo: 'AVATAR: Fuego y Cenizas', imagen: './src/assets/img/portadas/sci-fy/110.jpg' },
  { id: 111, titulo: 'SUPERMAN', imagen: './src/assets/img/portadas/sci-fy/111.jpg' },
  { id: 112, titulo: 'DEPREDADOR: Tierras Salvajes', imagen: './src/assets/img/portadas/sci-fy/112.jpg' },
  { id: 113, titulo: 'LAZARUS', imagen: './src/assets/img/portadas/sci-fy/113.jpg' },
  { id: 114, titulo: 'HENRY DANGER: La Pelicula', imagen: './src/assets/img/portadas/sci-fy/114.jpg' },
  { id: 115, titulo: 'SPLIT FICTION', imagen: './src/assets/img/portadas/sci-fy/115.jpg' },
  { id: 116, titulo: 'LOS PROTEGIDOS', imagen: './src/assets/img/portadas/sci-fy/116.jpg' },
  { id: 117, titulo: 'UN FUTURO BRILLANTE', imagen: './src/assets/img/portadas/sci-fy/117.jpg' },
  { id: 118, titulo: 'EL DESCENDIENTE', imagen: './src/assets/img/portadas/sci-fy/118.jpg' },
  { id: 119, titulo: 'RUR', imagen: './src/assets/img/portadas/sci-fy/119.jpg' },
  { id: 120, titulo: 'PRIMAL GAMES', imagen: './src/assets/img/portadas/sci-fy/120.jpg' },
]

const animacion = [
  { id: 121, titulo: 'ZOOTOPIA 2', imagen: './src/assets/img/portadas/animacion/121.jpg' },
  { id: 122, titulo: 'PITUFOS', imagen: './src/assets/img/portadas/animacion/122.jpg' },
  { id: 123, titulo: 'EL REY DE REYES', imagen: './src/assets/img/portadas/animacion/123.jpg' },
  { id: 124, titulo: 'JUNK WORLD', imagen: './src/assets/img/portadas/animacion/124.jpg' },
  { id: 125, titulo: 'ELIO', imagen: './src/assets/img/portadas/animacion/125.jpg' },
  { id: 126, titulo: 'EFECTOS COLATERALES', imagen: './src/assets/img/portadas/animacion/126.jpg' },
  { id: 127, titulo: 'LA FAMILIA MAS FELIZ DE LA NACION', imagen: './src/assets/img/portadas/animacion/127.jpg' },
  { id: 128, titulo: 'TU AMIGHO Y VECINO SPIDERMAN', imagen: './src/assets/img/portadas/animacion/128.jpg' },
  { id: 129, titulo: 'HEIDI, EL RESCATE DE LINCE', imagen: './src/assets/img/portadas/animacion/129.jpg' },
  { id: 130, titulo: 'GANES O PIERDAS', imagen: './src/assets/img/portadas/animacion/130.jpg' },
  { id: 131, titulo: 'JESUS, LUZ DEL MUNDO', imagen: './src/assets/img/portadas/animacion/131.jpg' },
  { id: 132, titulo: 'EL TESORI DE BARRACUDA', imagen: './src/assets/img/portadas/animacion/132.jpg' },
  { id: 133, titulo: 'LAS HERMANAS GRIMM', imagen: './src/assets/img/portadas/animacion/133.jpg' },
  { id: 134, titulo: 'HANNA Y LAS NAVIDADES OLVIDADAS', imagen: './src/assets/img/portadas/animacion/134.jpg' },
  { id: 135, titulo: 'TOM Y JERRY', imagen: './src/assets/img/portadas/animacion/135.jpg' },
  { id: 136, titulo: 'DORA', imagen: './src/assets/img/portadas/animacion/136.jpg' },
  { id: 137, titulo: 'EL GRAN PREMIO A TODA VELOCIDAD', imagen: './src/assets/img/portadas/animacion/137.jpg' },
  { id: 138, titulo: 'FARMAGA', imagen: './src/assets/img/portadas/animacion/138.jpg' },
  { id: 139, titulo: 'LOS TIPOS MALOS', imagen: './src/assets/img/portadas/animacion/139.jpg' },
  { id: 140, titulo: 'HIDDEN DRAGON', imagen: './src/assets/img/portadas/animacion/140.jpg' },
]

const western = [
  { id: 141, titulo: 'PISTOLEROS', imagen: './src/assets/img/portadas/western/141.jpg' },
  { id: 142, titulo: 'A PRAYER FOR THE DYING', imagen: './src/assets/img/portadas/western/142.jpg' },
  { id: 143, titulo: 'EMPEZAR DE NUEVO', imagen: './src/assets/img/portadas/western/143.jpg' },
  { id: 144, titulo: 'AJUSTE DE CUENTAS', imagen: './src/assets/img/portadas/western/144.jpg' },
  { id: 145, titulo: 'RUST: LA LEY DEL OESTE', imagen: './src/assets/img/portadas/western/145.jpg' },
  { id: 146, titulo: 'HIGH HORSE', imagen: './src/assets/img/portadas/western/146.jpg' },
  { id: 147, titulo: 'DJANGO IMBATIBLE', imagen: './src/assets/img/portadas/western/147.jpg' },
  { id: 148, titulo: 'BROKEN TRAIL', imagen: './src/assets/img/portadas/western/148.jpg' },
  { id: 149, titulo: 'FRONTIER CRUCIBLE', imagen: './src/assets/img/portadas/western/149.jpg' },
  { id: 150, titulo: 'GUNS OF REDEMPTION', imagen: './src/assets/img/portadas/western/150.jpg' },
  { id: 151, titulo: 'SOD AND STUBBLE', imagen: './src/assets/img/portadas/western/151.jpg' },
  { id: 152, titulo: 'AL NOROESTE DEL OESTE', imagen: './src/assets/img/portadas/western/152.jpg' },
  { id: 153, titulo: 'POR UN PUÑADO DE FRASES', imagen: './src/assets/img/portadas/western/153.jpg' },
  { id: 154, titulo: 'ROSEWATER', imagen: './src/assets/img/portadas/western/154.jpg' },
  { id: 155, titulo: 'LOS ABANDONADOS', imagen: './src/assets/img/portadas/western/155.jpg' },
  { id: 156, titulo: 'LUCKY LUKE', imagen: './src/assets/img/portadas/western/156.jpg' },
  { id: 157, titulo: 'TORNADO', imagen: './src/assets/img/portadas/western/157.jpg' },
  { id: 158, titulo: 'EL ULTIMO RODEO', imagen: './src/assets/img/portadas/western/158.jpg' },
  { id: 159, titulo: 'CINCO FORAJIDOS', imagen: './src/assets/img/portadas/western/159.jpg' },
  { id: 160, titulo: 'LALEYENDA DEL ESCANYAPOBRES', imagen: './src/assets/img/portadas/western/160.jpg' },
]

function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <h1>Home de pelís</h1>
      <CategoriaSlider titulo="Películas de Acción" peliculas={accion} />
      <CategoriaSlider titulo="Películas de Terror" peliculas={terror} />
      <CategoriaSlider titulo="Películas de Romance" peliculas={romance} />
      <CategoriaSlider titulo="Películas de Comedia" peliculas={comedia} />
      <CategoriaSlider titulo="Películas de Drama" peliculas={drama} />
      <CategoriaSlider titulo="Películas de Ciencia Ficción" peliculas={cienciaFiccion} />
      <CategoriaSlider titulo="Películas de Animación" peliculas={animacion} />
      <CategoriaSlider titulo="Películas de Western" peliculas={western} />   

      <Questions />
      <Footer />

    </>
  )
}

export default Home