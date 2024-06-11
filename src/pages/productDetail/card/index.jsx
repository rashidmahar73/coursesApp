import styles from "./styles.module.scss";
function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.tabsContainer}>
        <button>Personal</button>
        <button>Teams</button>
      </div>
      <h1 className={styles.subscribe}>Subscribe to Udemy’s top courses</h1>
      <p className={styles.getThisCourse}>
        Get this course, plus 11,000+ of our top-rated courses, with Personal
        Plan. <a>Learn more </a>
      </p>
      <button className={styles.freePlan}>Try Personal Plan for free</button>
      <p className={styles.startingPlan}>
        Starting at $11.00 per month after trial
      </p>
      <p className={styles.startingPlan}>Cancel anytime</p>
      <div className={styles.hrLineParent}>
        <p
        >
          or
        </p>
        <hr />
      </div>
      <h3 className={styles.price}>$74.99</h3>
      <button className={styles.addToCart}>Add to Cart</button>
      <p className={styles.startingPlan}>30-Day Money-Back Guarantee</p>

      <p className={styles.startingPlan}>Full Lifetime Access</p>
      <div className={styles.footerBtnParent}>
        <button className={styles.footerBtn}>Share</button>
        <button className={styles.footerBtn}>Gift this course</button>
        <button className={styles.footerBtn}>Apply Coupon</button>
      </div>
      <div className={styles.coupon}>
        <div>
          <h4>LETSLEARNNOW is applied</h4>
          <p>Udemy coupon</p>
        </div>
        <p>icon</p>
      </div>
      <div className={styles.enterCoupon}>
        <input placeHolder="Enter Coupon" />
        <button className={styles.applyBtn}>Apply</button>
      </div>
    </div>
  );
}
export { Card };
