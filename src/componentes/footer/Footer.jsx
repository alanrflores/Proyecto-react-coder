import { Link } from "react-router-dom";

const Footer = () => {
  const imgUrl1 = "https://goodgamesguild.com/front/ggg/200x200.png";
  return (
    <>
      <nav className="navbar navbar-dark sticky-bottom">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={imgUrl1} alt="" className="me-2" width="30" height="30" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Footer;
