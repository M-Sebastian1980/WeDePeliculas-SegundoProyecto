import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import "../styles/CategoriaSlider.css"

function CategoriaSlider({ titulo, peliculas }) {
  const [peliculasPorVista, setPeliculasPorVista] = useState(5)
  const [paginaActual, setPaginaActual] = useState(0)
  const [show, setShow] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState('')
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const actualizarVista = () => {
      if (window.innerWidth >= 992) {
        setPeliculasPorVista(5)
      } else if (window.innerWidth >= 768) {
        setPeliculasPorVista(3)
      } else {
        setPeliculasPorVista(2)
      }
    }

    actualizarVista()
    window.addEventListener('resize', actualizarVista)

    return () => window.removeEventListener('resize', actualizarVista)
  }, [])

  useEffect(() => {
    setPaginaActual(0)
  }, [peliculasPorVista])

  const grupos = useMemo(() => {
    const resultado = []
    for (let i = 0; i < peliculas.length; i += peliculasPorVista) {
      resultado.push(peliculas.slice(i, i + peliculasPorVista))
    }
    return resultado
  }, [peliculas, peliculasPorVista])

  const siguiente = () => {
    if (paginaActual < grupos.length - 1) {
      setPaginaActual(paginaActual + 1)
    }
  }

  const anterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - 1)
    }
  }

  const abrirModal = (pelicula) => {
    setTrailerUrl(pelicula.trailer)
    setPeliculaSeleccionada(pelicula)
    setShow(true)
  }

  const cerrarModal = () => {
    setShow(false)
    setTrailerUrl('')
    setPeliculaSeleccionada(null)
  }

  const irADetalle = () => {
    if (!peliculaSeleccionada) return
    cerrarModal()
    navigate(`/detalle/${peliculaSeleccionada.id}`)
  }

  return (
    <>
      <section className="categoria-slider-section">
        <h2 className="categoria-slider-titulo text-light">{titulo}</h2>

        <div className="categoria-slider-contenedor">
          <button onClick={anterior} disabled={paginaActual === 0}>
            ‹
          </button>

          <div className="categoria-slider-grid">
            {grupos[paginaActual]?.map((pelicula) => (
              <article
                key={`${titulo}-${paginaActual}-${pelicula.id}`}
                className="categoria-slider-card"
                onClick={() => abrirModal(pelicula)}
              >
                <img src={pelicula.imagen} alt={pelicula.titulo} />
                <h3>{pelicula.titulo}</h3>
              </article>
            ))}
          </div>

          <button
            onClick={siguiente}
            disabled={paginaActual === grupos.length - 1}
          >
            ›
          </button>
        </div>
      </section>

      <Modal show={show} onHide={cerrarModal} centered size="lg">
        <Modal.Header closeButton />
        <Modal.Body className="p-0">
          <div className="ratio ratio-16x9">
            <iframe
              src={trailerUrl}
              title="Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>

        <div
          className="position-relative"
          style={{ padding: '10px', background: 'black' }}
        >
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={cerrarModal}
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              Cerrar
            </button>
          </div>

          <button
            onClick={irADetalle}
            className="position-absolute end-0 top-50 translate-middle-y"
            style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px'
            }}
          >
            Descripción de película
          </button>
        </div>
      </Modal>
    </>
  )
}

export default CategoriaSlider