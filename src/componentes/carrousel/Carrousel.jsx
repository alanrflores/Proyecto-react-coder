import { Link } from "react-router-dom";

const Carrousel = ({ img1, color }) => {
  return (
    <div className="row justify-content-center align-items-center">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div
          className="carousel-inner border-bottom rounded-pill"
          style={{ background: { color } }}
        >
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100 opacity-75"
              alt="imagen-games"
            />

            <div className="carousel-caption d-none d-md-block">
              <Link to="/games">
              <button className="btn btn-outline-info border-0 rounded-pill">
              <i>  Games </i>
                </button>
                
              </Link>

              <p className="border-0 border-bottom rounded-pill"><i>See more games! </i> </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={img1}
              className="d-block w-100 opacity-75"
              alt="imagen-games"
            />

            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
