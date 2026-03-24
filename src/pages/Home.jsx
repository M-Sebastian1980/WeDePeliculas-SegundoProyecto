import Navbar from '../components/Navbar'
import CategoriaSlider from '../components/CategoriaSlider'
import Hero from '../components/Hero'
import Questions from "../components/Questions"

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

const terror = [
  { id: 21, titulo: 'DRACULA', imagen: 'https://pics.filmaffinity.com/dracula_a_love_tale-553481403-msmall.jpg' },
  { id: 22, titulo: 'EL SONIDO DE LA MUERTE', imagen: 'https://pics.filmaffinity.com/whistle-675923197-msmall.jpg' },
  { id: 23, titulo: 'EL TELEFONO NEGRO', imagen: 'https://pics.filmaffinity.com/the_black_phone-848459573-msmall.jpg' },
  { id: 24, titulo: 'EL CONJURO 4', imagen: 'https://pics.filmaffinity.com/the_conjuring_last_rites-547210494-msmall.jpg' },
  { id: 25, titulo: 'DESTINO FINAL 6', imagen: 'https://pics.filmaffinity.com/final_destination_bloodlines-790034090-msmall.jpg' },
  { id: 26, titulo: 'ALIENS ROMULUS', imagen: 'https://pics.filmaffinity.com/alien_romulus-177464034-msmall.jpg' },
  { id: 27, titulo: '28 AÑOS DESPUES', imagen: 'https://pics.filmaffinity.com/28_years_later-958240308-msmall.jpg' },
  { id: 28, titulo: 'PRESENCIA', imagen: 'https://pics.filmaffinity.com/presence-358240836-msmall.jpg' },
  { id: 29, titulo: 'NOSFERATU', imagen: 'https://pics.filmaffinity.com/nosferatu-964410519-msmall.jpg' },
  { id: 30, titulo: 'HAZ QUE REGRESE', imagen: 'https://pics.filmaffinity.com/bring_her_back-516362359-msmall.jpg' },
  { id: 31, titulo: 'COLECCIONISTA DE ALMAS', imagen: 'https://pics.filmaffinity.com/longlegs-192102975-msmall.jpg' },
  { id: 32, titulo: 'HEREJE', imagen: 'https://pics.filmaffinity.com/heretic-158529513-msmall.jpg' },
  { id: 33, titulo: 'REGALO MALDITO', imagen: 'https://pics.filmaffinity.com/vicious-799999558-msmall.jpg' },
  { id: 34, titulo: 'NO HABLES CON EXTRAÑOS', imagen: 'https://pics.filmaffinity.com/speak_no_evil-102462605-msmall.jpg' },
  { id: 35, titulo: 'UN LUGAR EN SILENCIO', imagen: 'https://pics.filmaffinity.com/a_quiet_place_day_one-758712709-msmall.jpg' },
  { id: 36, titulo: 'LA PRIMERA PROFECIA', imagen: 'https://pics.filmaffinity.com/the_first_omen-372679118-msmall.jpg' },
  { id: 37, titulo: 'OBSERVADOS', imagen: 'https://pics.filmaffinity.com/the_watchers-599911256-msmall.jpg' },
  { id: 38, titulo: 'EL RIO DE LA MUERTE', imagen: 'https://pics.filmaffinity.com/river_of_blood-675288102-msmall.jpg' },
  { id: 39, titulo: 'INMACULADA', imagen: 'https://pics.filmaffinity.com/immaculate-866612378-msmall.jpg' },
  { id: 40, titulo: 'TERRIFER 3', imagen: 'https://pics.filmaffinity.com/terrifier_3-141451507-msmall.jpg' },
]

const romance = [
  { id: 41, titulo: 'A PESAR DE TI', imagen: 'https://pics.filmaffinity.com/regretting_you-808313332-msmall.jpg' },
  { id: 42, titulo: 'AMOR', imagen: 'https://pics.filmaffinity.com/kjaerlighet_love-433411494-msmall.jpg' },
  { id: 43, titulo: 'AMOR SIN BARRERAS', imagen: 'https://pics.filmaffinity.com/west_side_story-621764532-msmall.jpg' },
  { id: 44, titulo: 'ENCANTADO DE CONOCERTE', imagen: 'https://pics.filmaffinity.com/yalmiun_sarang-594794058-msmall.jpg' },
  { id: 45, titulo: 'YESTERDAY', imagen: 'https://pics.filmaffinity.com/yesterday-541518094-msmall.jpg' },
  { id: 46, titulo: 'UN AÑO Y UN DIA', imagen: 'https://pics.filmaffinity.com/un_ano_y_un_dia-530612850-msmall.jpg' },
  { id: 47, titulo: 'PASAJE AL PARAISO', imagen: 'https://pics.filmaffinity.com/ticket_to_paradise-762328478-msmall.jpg' },
  { id: 48, titulo: 'LOS HIJOS DE OTROS', imagen: 'https://pics.filmaffinity.com/les_enfants_des_autres-784062624-mmed.jpg' },
  { id: 49, titulo: 'EL MAPA QUE ME LLEVA A TI', imagen: 'https://pics.filmaffinity.com/the_map_that_leads_to_you-994903243-msmall.jpg' },
  { id: 50, titulo: 'ESA SEMANA JUNTOS', imagen: 'https://pics.filmaffinity.com/esa_semana_juntos-139352634-msmall.jpg' },
  { id: 51, titulo: 'IMPERIO DE LUZ', imagen: 'https://pics.filmaffinity.com/empire_of_light-758763304-msmall.jpg' },
  { id: 52, titulo: 'BODAS DE PLOMO', imagen: 'https://pics.filmaffinity.com/shotgun_wedding-157709145-msmall.jpg' },
  { id: 53, titulo: 'CASATE CONMIGO', imagen: 'https://pics.filmaffinity.com/marry_me-852565093-msmall.jpg' },
  { id: 54, titulo: 'PERSUASION', imagen: 'https://pics.filmaffinity.com/persuasion-134146216-msmall.jpg' },
  { id: 55, titulo: 'MI POLICIA', imagen: 'https://pics.filmaffinity.com/my_policeman-860997796-msmall.jpg' },
  { id: 56, titulo: 'UN ASUNTO PRIVADO', imagen: 'https://pics.filmaffinity.com/un_asunto_privado-458992631-msmall.jpg' },
  { id: 57, titulo: 'AMOR DE MENTIRAS', imagen: 'https://pics.filmaffinity.com/u_ju_me_li_mi-866173974-msmall.jpg' },
  { id: 58, titulo: 'CORAZONES MALHERIDOS', imagen: 'https://pics.filmaffinity.com/purple_hearts-357101918-msmall.jpg' },
  { id: 59, titulo: 'LA IMPACIENCIA DEL COROZON', imagen: 'https://pics.filmaffinity.com/kysset_the_kiss-163894266-msmall.jpg' },
  { id: 60, titulo: 'UNA CUESTION DE FE', imagen: 'https://pics.filmaffinity.com/about_fate-692459348-msmall.jpg' },
]

const comedia = [
  { id: 61, titulo: 'LA PISTOLA DESNUDA', imagen: 'https://pics.filmaffinity.com/the_naked_gun-495738280-msmall.jpg' },
  { id: 62, titulo: 'UN DIA FUERA DE CONTROL', imagen: 'https://pics.filmaffinity.com/playdate-995002724-msmall.jpg' },
  { id: 63, titulo: 'VIAJE DE FIN DE CURSO', imagen: 'https://pics.filmaffinity.com/viaje_de_fin_de_curso_mallorca-687946770-msmall.jpg' },
  { id: 64, titulo: 'UN FUNERAL DE LOCOS', imagen: 'https://pics.filmaffinity.com/un_funeral_de_locos-332020688-msmall.jpg' },
  { id: 65, titulo: 'OTRO PEQUEÑO FAVOR', imagen: 'https://pics.filmaffinity.com/another_simple_favor-325262759-msmall.jpg' },
  { id: 66, titulo: 'PLAN FAMILIAR 2', imagen: 'https://pics.filmaffinity.com/the_family_plan_2-742120702-msmall.jpg' },
  { id: 67, titulo: 'OTRO VIERNES DE LOCOS', imagen: 'https://pics.filmaffinity.com/freakier_friday-790025087-msmall.jpg' },
  { id: 68, titulo: 'ENCANTADO DE NO CONOCERTE', imagen: 'https://pics.filmaffinity.com/yalmiun_sarang-594794058-msmall.jpg' },
  { id: 69, titulo: 'MANTENIMIENTO REQUERIDO', imagen: 'https://pics.filmaffinity.com/maintenance_required-694057919-msmall.jpg' },
  { id: 70, titulo: 'LA AGENCIA', imagen: 'https://pics.filmaffinity.com/la_agencia-326712184-msmall.jpg' },
  { id: 71, titulo: 'UNA ABOGADA BRILLANTE', imagen: 'https://pics.filmaffinity.com/uma_advogada_brilhante-224189644-msmall.jpg' },
  { id: 72, titulo: 'EL ULTIMO ENCARGO', imagen: 'https://pics.filmaffinity.com/the_pickup-568420334-msmall.jpg' },
  { id: 73, titulo: 'MINECRAFT', imagen: 'https://pics.filmaffinity.com/a_minecraft_movie-227832687-msmall.jpg' },
  { id: 74, titulo: 'LA MITAD QUE FALTA', imagen: 'https://pics.filmaffinity.com/twinless-862538325-msmall.jpg' },
  { id: 75, titulo: 'EL PAPEL', imagen: 'https://pics.filmaffinity.com/the_paper-536779354-msmall.jpg' },
  { id: 76, titulo: 'EL NOVIO DE MAMÁ', imagen: 'https://pics.filmaffinity.com/el_novio_de_mama-723682273-msmall.jpg' },
  { id: 77, titulo: 'ANACONDA', imagen: 'https://pics.filmaffinity.com/anaconda-237905960-msmall.jpg' },
  { id: 78, titulo: 'AMORES COMPARTIDOS', imagen: 'https://pics.filmaffinity.com/splitsville-274874441-msmall.jpg' },
  { id: 79, titulo: 'DESASTRE EN FAMILIA', imagen: 'https://pics.filmaffinity.com/desastre_en_familia-782866915-msmall.jpg' },
  { id: 80, titulo: 'BRIDGET JONES: LOCA POR ËL', imagen: 'https://pics.filmaffinity.com/bridget_jones_mad_about_the_boy-609929628-msmall.jpg' },
]

const drama = [
  { id: 81, titulo: 'LA NOVIA', imagen: 'https://pics.filmaffinity.com/the_bride-245563663-msmall.jpg' },
  { id: 82, titulo: 'UN FAMILIAR', imagen: 'https://pics.filmaffinity.com/unfamiliar-352724765-msmall.jpg' },
  { id: 83, titulo: 'LA FIERA', imagen: 'https://pics.filmaffinity.com/la_fiera-265804283-msmall.jpg' },
  { id: 84, titulo: 'CUMBRES BORRASCOSAS', imagen: 'https://pics.filmaffinity.com/wuthering_heights-945530459-msmall.jpg' },
  { id: 85, titulo: 'MUJERES IMPERFECTAS', imagen: 'https://pics.filmaffinity.com/imperfect_women-736397939-msmall.jpg' },
  { id: 86, titulo: 'EN UN ABRIR Y CERRRAR DE OJOS', imagen: 'https://pics.filmaffinity.com/in_the_blink_of_an_eye-485419387-msmall.jpg' },
  { id: 87, titulo: 'PROYECTO FIN DEL MUNDO', imagen: 'https://pics.filmaffinity.com/project_hail_mary-593131774-msmall.jpg' },
  { id: 88, titulo: 'SALVADOR', imagen: 'https://pics.filmaffinity.com/salvador-757944422-msmall.jpg' },
  { id: 89, titulo: 'LA CAZA', imagen: 'https://pics.filmaffinity.com/traques-181187658-msmall.jpg' },
  { id: 90, titulo: 'CAMINOS DEL CRIMEN', imagen: 'https://pics.filmaffinity.com/crime_101-127743661-msmall.jpg' },
  { id: 91, titulo: 'EL INFIERNO DE LAS MUJERES', imagen: 'https://pics.filmaffinity.com/pieklo_kobiet-285503510-msmall.jpg' },
  { id: 92, titulo: 'BAILANDO SOBRE HIELO', imagen: 'https://pics.filmaffinity.com/finding_her_edge-844715437-msmall.jpg' },
  { id: 93, titulo: 'AMOR ANIMAL', imagen: 'https://pics.filmaffinity.com/amor_animal-485837502-msmall.jpg' },
  { id: 94, titulo: 'EL MUSEO DE LA INOCENCIA', imagen: 'https://pics.filmaffinity.com/masumiyet_muzesi-367568816-msmall.jpg' },
  { id: 95, titulo: 'SOLO MIO', imagen: 'https://pics.filmaffinity.com/solo_mio-533398345-msmall.jpg' },
  { id: 96, titulo: 'EN LA ZONA GRIS', imagen: 'https://pics.filmaffinity.com/in_the_grey-165473531-msmall.jpg' },
  { id: 97, titulo: 'LAS LOCAS DEL OBELISCO', imagen: 'https://pics.filmaffinity.com/las_locas_del_obelisco-985429911-msmall.jpg' },
  { id: 98, titulo: 'JOVEN SECUESTRADA', imagen: 'https://pics.filmaffinity.com/girl_taken-653578890-msmall.jpg' },
  { id: 99, titulo: 'NO TE OLVIDARE', imagen: 'https://pics.filmaffinity.com/reminders_of_him-219584202-msmall.jpg' },
  { id: 100, titulo: 'LOS JUSTOS', imagen: 'https://pics.filmaffinity.com/los_justos-491540068-msmall.jpg' },
]

const cienciaFiccion = [
  { id: 101, titulo: 'SIN PIEDAD', imagen: 'https://pics.filmaffinity.com/mercy-236747908-msmall.jpg' },
  { id: 102, titulo: 'JURASSIC WORLD: Renace', imagen: 'https://pics.filmaffinity.com/jurassic_world_rebirth-254962281-msmall.jpg' },
  { id: 103, titulo: 'MICKEY 17', imagen: 'https://pics.filmaffinity.com/mickey_17-530854063-msmall.jpg' },
  { id: 104, titulo: 'CONTROL ROOM', imagen: 'https://pics.filmaffinity.com/control_room-766434300-msmall.jpg' },
  { id: 105, titulo: 'LOS 4 FANTASTICOS', imagen: 'https://pics.filmaffinity.com/the_fantastic_four_first_steps-284761648-msmall.jpg' },
  { id: 106, titulo: 'CAZADORES DEL FIN DEL MUNDO', imagen: 'https://pics.filmaffinity.com/afterburn-596088531-msmall.jpg' },
  { id: 107, titulo: 'COMPAÑERA PERFECTA', imagen: 'https://pics.filmaffinity.com/companion-438784716-msmall.jpg' },
  { id: 108, titulo: 'ASH', imagen: 'https://pics.filmaffinity.com/ash-296434606-msmall.jpg' },
  { id: 109, titulo: 'TRON ARES', imagen: 'https://pics.filmaffinity.com/tron_ares-548031766-msmall.jpg' },
  { id: 110, titulo: 'AVATAR: Fuego y Cenizas', imagen: 'https://pics.filmaffinity.com/avatar_fire_and_ash-103982566-msmall.jpg' },
  { id: 211, titulo: 'SUPERMAN', imagen: 'https://pics.filmaffinity.com/superman-138926671-msmall.jpg' },
  { id: 122, titulo: 'DEPREDADOR: Tierras Salvajes', imagen: 'https://pics.filmaffinity.com/predator_badlands-767428270-msmall.jpg' },
  { id: 123, titulo: 'LAZARUS', imagen: 'https://pics.filmaffinity.com/lazarus-840138202-msmall.jpg' },
  { id: 124, titulo: 'HENRY DANGER: La Pelicula', imagen: 'https://pics.filmaffinity.com/henry_danger_the_movie-320089100-msmall.jpg' },
  { id: 125, titulo: 'SPLIT FICTION', imagen: 'https://pics.filmaffinity.com/split_fiction-485356590-msmall.jpg' },
  { id: 126, titulo: 'LOS PROTEGIDOS', imagen: 'https://pics.filmaffinity.com/los_protegidos_un_nuevo_poder-520864274-msmall.jpg' },
  { id: 127, titulo: 'UN FUTURO BRILLANTE', imagen: 'https://pics.filmaffinity.com/un_futuro_brillante-642041362-msmall.jpg' },
  { id: 128, titulo: 'EL DESCENDIENTE', imagen: 'https://pics.filmaffinity.com/descendent-940555761-msmall.jpg' },
  { id: 129, titulo: 'RUR', imagen: 'https://pics.filmaffinity.com/r_u_r-318748025-msmall.jpg' },
  { id: 200, titulo: 'PRIMAL GAMES', imagen: 'https://pics.filmaffinity.com/primal_games-828588786-msmall.jpg' },
]

const animacion = [
  { id: 201, titulo: 'ZOOTOPIA 2', imagen: 'https://pics.filmaffinity.com/zootopia_2-164123559-msmall.jpg' },
  { id: 202, titulo: 'PITUFOS', imagen: 'https://pics.filmaffinity.com/smurfs-178339408-msmall.jpg' },
  { id: 203, titulo: 'EL REY DE REYES', imagen: 'https://pics.filmaffinity.com/the_king_of_kings-104943300-msmall.jpg' },
  { id: 204, titulo: 'JUNK WORLD', imagen: 'https://pics.filmaffinity.com/junk_world-358408976-msmall.jpg' },
  { id: 205, titulo: 'ELIO', imagen: 'https://pics.filmaffinity.com/elio-639250511-msmall.jpg' },
  { id: 206, titulo: 'EFECTOS COLATERALES', imagen: 'https://pics.filmaffinity.com/common_side_effects-450034236-msmall.jpg' },
  { id: 207, titulo: 'LA FAMILIA MAS FELIZ DE LA NACION', imagen: 'https://pics.filmaffinity.com/1_happy_family_usa-191578627-msmall.jpg' },
  { id: 208, titulo: 'TU AMIGHO Y VECINO SPIDERMAN', imagen: 'https://pics.filmaffinity.com/your_friendly_neighborhood_spider_man-970131418-msmall.jpg' },
  { id: 209, titulo: 'HEIDI, EL RESCATE DE LINCE', imagen: 'https://pics.filmaffinity.com/heidi_die_legende_vom_luchs-379095822-msmall.jpg' },
  { id: 210, titulo: 'GANES O PIERDAS', imagen: 'https://pics.filmaffinity.com/win_or_lose-810931735-msmall.jpg' },
  { id: 211, titulo: 'JESUS, LUZ DEL MUNDO', imagen: 'https://pics.filmaffinity.com/light_of_the_world-989954133-msmall.jpg' },
  { id: 212, titulo: 'EL TESORI DE BARRACUDA', imagen: 'https://pics.filmaffinity.com/el_tesoro_de_barracuda-632828628-msmall.jpg' },
  { id: 213, titulo: 'LAS HERMANAS GRIMM', imagen: 'https://pics.filmaffinity.com/the_sisters_grimm-593134697-msmall.jpg' },
  { id: 214, titulo: 'HANNA Y LAS NAVIDADES OLVIDADAS', imagen: 'https://pics.filmaffinity.com/hanna_i_els_nadals_oblidats-753012513-msmall.jpg' },
  { id: 215, titulo: 'TOM Y JERRY', imagen: 'https://pics.filmaffinity.com/tom_jerry_forbidden_compass-751900648-msmall.jpg' },
  { id: 216, titulo: 'DORA', imagen: 'https://pics.filmaffinity.com/dora_magic_mermaid_adventures-281538392-msmall.jpg' },
  { id: 217, titulo: 'EL GRAN PREMIO A TODA VELOCIDAD', imagen: 'https://pics.filmaffinity.com/grand_prix_of_europe-487534885-msmall.jpg' },
  { id: 218, titulo: 'FARMAGA', imagen: 'https://pics.filmaffinity.com/farmagia-626042002-msmall.jpg' },
  { id: 219, titulo: 'LOS TIPOS MALOS', imagen: 'https://pics.filmaffinity.com/the_bad_guys_little_lies_and_alibis-693614590-msmall.jpg' },
  { id: 300, titulo: 'HIDDEN DRAGON', imagen: 'https://pics.filmaffinity.com/hidden_dragon-891801002-msmall.jpg' },
]

const western = [
  { id: 301, titulo: 'PISTOLEROS', imagen: 'https://pics.filmaffinity.com/gunslingers-565790328-msmall.jpg' },
  { id: 302, titulo: 'A PRAYER FOR THE DYING', imagen: 'https://pics.filmaffinity.com/a_prayer_for_the_dying-906627576-msmall.jpg' },
  { id: 303, titulo: 'EMPEZAR DE NUEVO', imagen: 'https://pics.filmaffinity.com/broke-629222804-msmall.jpg' },
  { id: 304, titulo: 'AJUSTE DE CUENTAS', imagen: 'https://pics.filmaffinity.com/day_of_reckoning-206466220-msmall.jpg' },
  { id: 305, titulo: 'RUST: LA LEY DEL OESTE', imagen: 'https://pics.filmaffinity.com/rust-179138522-msmall.jpg' },
  { id: 306, titulo: 'HIGH HORSE', imagen: 'https://pics.filmaffinity.com/high_horse_the_black_cowboy-888993819-msmall.jpg' },
  { id: 307, titulo: 'DJANGO IMBATIBLE', imagen: 'https://pics.filmaffinity.com/django_undisputed-605342539-msmall.jpg' },
  { id: 308, titulo: 'BROKEN TRAIL', imagen: 'https://pics.filmaffinity.com/broken_trail-366060672-msmall.jpg' },
  { id: 309, titulo: 'FRONTIER CRUCIBLE', imagen: 'https://pics.filmaffinity.com/frontier_crucible-486386059-msmall.jpg' },
  { id: 310, titulo: 'GUNS OF REDEMPTION', imagen: 'https://pics.filmaffinity.com/guns_of_redemption-882974710-msmall.jpg' },
  { id: 311, titulo: 'SOD AND STUBBLE', imagen: 'https://pics.filmaffinity.com/sod_and_stubble-377475172-msmall.jpg' },
  { id: 312, titulo: 'AL NOROESTE DEL OESTE', imagen: 'https://pics.filmaffinity.com/ao_noroeste_do_oeste-782393097-msmall.jpg' },
  { id: 313, titulo: 'POR UN PUÑADO DE FRASES', imagen: 'https://pics.filmaffinity.com/por_un_punado_de_frases-132317280-msmall.jpg' },
  { id: 314, titulo: 'ROSEWATER', imagen: 'https://pics.filmaffinity.com/rosewater-618159090-msmall.jpg' },
  { id: 315, titulo: 'LOS ABANDONADOS', imagen: 'https://pics.filmaffinity.com/the_abandons-631588627-msmall.jpg' },
  { id: 316, titulo: 'LUCKY LUKE', imagen: 'https://pics.filmaffinity.com/lucky_luke-274214633-msmall.jpg' },
  { id: 317, titulo: 'TORNADO', imagen: 'https://pics.filmaffinity.com/tornado-965453262-msmall.jpg' },
  { id: 318, titulo: 'EL ULTIMO RODEO', imagen: 'https://pics.filmaffinity.com/the_last_rodeo-656590888-msmall.jpg' },
  { id: 319, titulo: 'CINCO FORAJIDOS', imagen: 'https://pics.filmaffinity.com/the_outlaws-390196802-msmall.jpg' },
  { id: 320, titulo: 'LALEYENDA DEL ESCANYAPOBRES', imagen: 'https://pics.filmaffinity.com/escanyapobres-994078624-msmall.jpg' },
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

    </>
  )
}

export default Home