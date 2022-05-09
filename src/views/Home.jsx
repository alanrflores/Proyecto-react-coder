import Carrousel from "../componentes/carrousel/Carrousel"

const Home = () => {

  const imgUrl1 = "https://www.todofondos.net/wp-content/uploads/juegos-de-computadora-foto-de-portada-hd-768x432.jpg"
  const color = "#000";
  return (
    <>
    <div className="container-fluid">
      <div className="row">
      <h1 className="fw-bold text-center fst-italic border-bottom rounded-pill">Welcome</h1>
      
      <Carrousel color={color}
        img1={imgUrl1}
         />
         </div>
         </div>
    </>
  )
}

export default Home