import { StarIcon } from "../../../icons";
import styles from "./styles.module.scss";

function Count(){
    return (
        <div className={styles.subHeader}>
        <button className={styles.rating}>
          4.6 <StarIcon />{" "}
        </button>
        <p className={styles.ratingCount}> (300,700 ratings) </p>
        <p className={styles.stdCount}> 1,292,745 students </p>
      </div>
    )
}

export {Count};