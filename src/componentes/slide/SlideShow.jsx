import React from "react";
import style from "../items/Item.module.css";
import Loading from "../Loading/Loading";

const SlideShow = ({ imagen }) => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* si imagen existe?, traeme imagen en su posicion y si no loading */}
            <img
              src={imagen ? imagen[0] : <Loading />}
              className={style.img}
              alt="imagen-games"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen ? imagen[1] : <Loading />}
              className={style.img}
              alt="imagen-games"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen ? imagen[2] : <Loading />}
              className={style.img}
              alt="imagen-games"
            />
          </div>
          <div className="carousel-item">
            <img
              src={imagen ? imagen[3] : <Loading />}
              className={style.img}
              alt="imagen-games"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
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
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default SlideShow;
