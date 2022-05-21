import React from "react";
import style from "../items/Item.module.css"


 const SlideShow = ({ imagen }) => {

//     const imagens =()=>{
//         if(imagen.includes(imagen[0])){
//             console.log("true")
//         }else{
//             console.log("error")
//         }
   
//     }
//         console.log(imagens())
   
    //console.log(imagen)
  return (
      <> 
           
                <div 
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                   <img />
                  </div>
                  <div className="carousel-item">
                    <img src="{imagen[1]}" className={style.img} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="{imagen[2]}" className={style.img} alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
           
             
      
              
             
    
    </>
   
  );
};

export default SlideShow;
