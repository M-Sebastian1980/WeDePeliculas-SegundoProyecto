import { useEffect, useMemo, useState } from 'react'
import { Modal } from 'react-bootstrap'
import "../styles/CategoriaSlider.css"

function CategoriaSlider({ titulo, peliculas }) {
  const [peliculasPorVista, setPeliculasPorVista] = useState(5)
  const [paginaActual, setPaginaActual] = useState(0)
  const [show, setShow] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState('')

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

  const abrirModal = (trailer) => {
    setTrailerUrl(trailer)
    setShow(true)
  }

  const cerrarModal = () => {
    setShow(false)
    setTrailerUrl('')
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
                onClick={() => abrirModal(pelicula.trailer)}
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
  <div style={{ textAlign: 'center', padding: '10px' }}>
    <button onClick={cerrarModal}>Cerrar</button>
  </div>
</Modal>
    </>
  )
}

export default CategoriaSlider