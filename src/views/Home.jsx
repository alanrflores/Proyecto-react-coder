import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {

const goToTop = ()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth',
  });
};
useEffect(()=>{
  goToTop()
},[])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <i>
            <div className={styles.h2}>
              <h2 className="text-center border-bottom p-1 rounded-pill text-white">
                Welcome
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
              
              <Link to="/games" className={styles.link}><i className="text-center"> More Details</i></Link>
              
            </div>
          </i>
        </div>
      </div>
    </>
  );
};

export default Home;
