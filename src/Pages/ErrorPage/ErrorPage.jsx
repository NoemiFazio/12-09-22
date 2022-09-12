import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function ErrorPage(props) {
  return (
    <div className={styles.ErrorPage}>
      {props.status === 404 ? (
        <img
          src="https://miro.medium.com/max/1400/1*zE2qnVTJehut7B8P2aMn3A.gif"
          alt="Error404"
        />
      ) : (
        "Errooor!!"
      )}
      <button className={styles.button}>
        <Link className={styles.link} to="/" title="Torna alla Homepage">
          Home
        </Link>
      </button>
    </div>
  );
}

export default ErrorPage;
