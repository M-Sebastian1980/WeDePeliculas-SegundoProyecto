import { useEffect, useState } from "react";
import ModalMovie from "../components/Modal";
import ModalDeleteMovie from "../components/ModalDeleteMovie";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/admin.css";

function AdminPage() {

    const [movies, setMovies] = useState([]);

    function getMovies() {
        const movies = JSON.parse(localStorage.getItem('movies')) || [];
        setMovies(movies);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (

        <>

            <Navbar />

            <div className="admin-container">
                <div className="admin-header">
                    <h1 className="admin-title">Panel de Administración</h1>
                    <ModalMovie
                        buttonName='Agregar película'
                        getMovies={getMovies}
                    />
                </div>

                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Película</th>
                            <th>Categoría</th>
                            <th>Descripción</th>
                            <th>Publicado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie) => (
                                <tr key={movie.id}>
                                    <td>{movie.id}</td>
                                    <td>{movie.name}</td>
                                    <td>{movie.category}</td>
                                    <td>{movie.description}</td>
                                    <td>{movie.published ? "Sí" : "No"}</td>
                                    <td>
                                        <div className="admin-actions">
                                            <ModalMovie
                                                buttonName='E'
                                                getMovies={getMovies}
                                                id={movie.id}
                                            />
                                            <ModalDeleteMovie
                                                id={movie.id}
                                                getMovies={getMovies}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            <Footer />
        </>
    )
}
export default AdminPage;