import { Link } from "react-router-dom";

const Footer = () => {
  const imgUrl1 = "https://goodgamesguild.com/front/ggg/200x200.png";
  return (
    <>
      <nav className="navbar navbar-dark sticky-bottom d-flex justify-content-center">
        <div className="d-flex flex-wrap flex-row">
          <Link className="navbar-brand" to="#">
            <img src={imgUrl1} alt="" className="" width="30" height="30" />
          </Link>
          <h6>
            <i>Desarrollado por Alan Flores</i>
          </h6>
        </div>
      </nav>
    </>
  );
};

export default Footer;
