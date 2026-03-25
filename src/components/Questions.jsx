import "../styles/Questions.css";

function Questions() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Preguntas Frecuentes</h2>

      <div className="accordion" id="faqAccordion">

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              ¿La página es gratuita?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              Sí, todo el contenido disponible en la página puede verse de manera gratuita, sin costo para el usuario.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              ¿Necesito registrarme para ver películas?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              No, podés navegar por la página y disfrutar del contenido sin necesidad de crear una cuenta.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              ¿Las películas están en calidad HD?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              Sí, la plataforma ofrece películas en calidad HD para brindar una mejor experiencia de visualización.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
            >
              ¿La página es segura?
            </button>
          </h2>
          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              Sí, la página está diseñada para que los usuarios puedan navegar de forma segura y acceder al contenido de manera simple y confiable.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
            >
              ¿Puedo ver películas desde el celular?
            </button>
          </h2>
          <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              Sí, la página es responsive, por lo que podés ingresar y ver contenido desde celular, tablet o computadora.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-3">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
            >
              ¿Qué tipo de contenido puedo encontrar?
            </button>
          </h2>
          <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body bg-light text-dark">
              Podrás encontrar películas de distintos géneros, como terror, acción, comedia, drama y mucho más.
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Questions