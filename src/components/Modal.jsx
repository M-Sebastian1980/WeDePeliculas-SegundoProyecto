import { nanoid } from 'nanoid';
import { func } from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({ buttonName, getMovies, id }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movieToEdit, setMovieToEdit] = useState({})

    function handleCreateEditMovies(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        let currentMovies = JSON.parse(localStorage.getItem('movies')) || [];
        if (id) {
            const editMovies = currentMovies.map((movie) => {
                if (movie.id === id) {
                    return {
                        ...movie,
                        ...data
                    };
                }
                return movie;
            });
            localStorage.setItem('movies', JSON.stringify(editMovies));
        } else {
            data.id = nanoid().slice(0, 6);
            currentMovies.push(data);
            localStorage.setItem('movies', JSON.stringify(currentMovies));
        }
        form.reset();
        getMovies();
        handleClose();
    }

    function handleEditMovie(idToEdit) {
        const movies = JSON.parse(localStorage.getItem('movies')) || [];
        const movieFound = movies.find((movie) => movie.id === idToEdit);
        setMovieToEdit(movieFound);
    }

    useEffect(() => {
        if (id) {
            handleEditMovie(id);
        }
    }, [id])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonName}
            </Button>

            <Modal show={show} onHide={handleClose} centered>
  <Modal.Header closeButton className="bg-dark text-white border-0">
    <Modal.Title className="fw-bold">
      {id ? 'Modificar película' : 'Agregar nueva película'}
      {id && `: ${movieToEdit?.name}`}
    </Modal.Title>
  </Modal.Header>

  <Modal.Body className="bg-dark text-white">
    <form onSubmit={(e) => handleCreateEditMovies(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fw-semibold">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          defaultValue={movieToEdit?.name}
          className="form-control"
          placeholder="Ingrese el nombre de la película"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label fw-semibold">
          Categoría
        </label>
        <input
          id="category"
          type="text"
          name="category"
          defaultValue={movieToEdit?.category}
          className="form-control"
          placeholder="Ingrese la categoría"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label fw-semibold">
          Descripción breve
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={movieToEdit?.description}
          className="form-control"
          placeholder="Ingrese una descripción breve"
          rows="3"
          required
        />
      </div>

      <div className="form-check form-switch mb-4">
        <input
          id="published"
          type="checkbox"
          name="published"
          defaultChecked={movieToEdit?.published}
          className="form-check-input"
        />
        <label htmlFor="published" className="form-check-label">
          Disponible en el sitio
        </label>
      </div>

      <div className="d-flex justify-content-end gap-2">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleClose}
        >
          Cancelar
        </button>

        <button type="submit" className="btn btn-warning fw-semibold">
          {id ? 'Guardar cambios' : 'Agregar película'}
        </button>
      </div>
    </form>
  </Modal.Body>
</Modal>
        </>
    );
}

export default ModalMovie;