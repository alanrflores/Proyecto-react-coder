const Footer = () => {
  const imgUrl1 = "https://goodgamesguild.com/front/ggg/200x200.png";
  return (
    <>
      <nav className="navbar navbar-dark sticky-bottom bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={imgUrl1} alt="" className="me-2" width="30" height="30" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Footer;
