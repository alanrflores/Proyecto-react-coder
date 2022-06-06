import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import styles from "./home.module.css";

const Home = () => {
  const { users } = useContext(UserContext);
  // console.log(users)

  //se desplaza a la parte superior de la pagina
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    goToTop();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <i>
            <div className={styles.h2}>
              <h2 className="text-center fw-bold border-bottom p-1 rounded-pill text-white">
                Welcome{" "}
                <span className="text-warning fw-bold">{users.displayName || users.email}</span>
              </h2>
            </div>
            <article className={styles.article}>
              <p className={styles.p}>
                Discover the games you want, from exclusive hits to innovative
                indies; they all come to life with the power of the PS5™, Xbox
                Series™, etc.. console.
              </p>
            </article>
            <i className={styles.i}>Go to Games</i>
            <div className={styles.divLink}>
              <Link to="/games" className={styles.link}>
                <i className="text-center"> More Details</i>
              </Link>
            </div>
          </i>
        </div>
      </div>
    </>
  );
};

export default Home;
