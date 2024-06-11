import { useState } from "react";
import { LastUpdate, StarIcon, TickIcon } from "../../icons";
import { Card } from "./card";
import { Count } from "./count";
import styles from "./styles.module.scss";

function ProductDetail() {
  const bulletPoints = [
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
    {
      desc: "You will master the Python programming language by building 100 unique projects over 100 days.",
    },
  ];

  const courseIncludesPoints = [
    {
      desc: "54 hours on-demand video",
    },
    {
      desc: "146 downloadable resources",
    },
    {
      desc: "Assignments",
    },
    {
      desc: "Access on mobile and TV",
    },
    {
      desc: "222 articles",
    },
    {
      desc: "Certificate of completion",
    },
  ];
  const [fixedElements, setFixedElements] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 230) {
      setFixedElements(true);
    } else {
      setFixedElements(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={styles.navContainer}></div>
      <div className={fixedElements ? styles.fixedCardParent : styles.cardParent}>
        <Card />
      </div>
      <div className={styles.detailContainer}>
        <div className={fixedElements ? styles.fixedHeader : styles.displayHide}>
          <h1 className={styles.courseTitle}>
            100 Days of Code: The Complete Python Pro Bootcamp
          </h1>
          <Count />
        </div>
      </div>
      <div className={styles.subHeader}>
        <div className={styles.childDiv}>
          <h1 className={styles.heading}>
            100 Days of Code: The Complete Python Pro Bootcamp
          </h1>

          <h3 className={styles.subHeading}>
            Master Python by building 100 projects in 100 days. Learn data
            science, automation, build websites, games and apps!
          </h3>
          <Count />
          <p className={styles.createdBy}>
            Create By <span>Text</span>
          </p>
          <div className={styles.footer}>
            <p className={styles.lastUpdatedOn}>
              Last updated 06/2024 English English, Arabic [Auto] ,
            </p>
          </div>
        </div>
      </div>

      <div className={styles.whatYouLearn} style={{ width: "698px" }}>
        <h1 className={styles.heading}>What you'll learn</h1>
        <ul className={styles.bulletPointsUL}>
          {bulletPoints?.map((elem) => {
            return (
              <li className={styles.listItem}>
                {" "}
                <TickIcon /> {elem.desc}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.coursesDetails} style={{ width: "380px" }}>
        <h1 className={styles.heading}>This course includes:</h1>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          {courseIncludesPoints?.map((elem) => {
            return (
              <div>
                <p className={styles.includesPoints}>{elem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.topCompanies} style={{ width: "698px" }}>
        <p className={styles.text}>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide. <a>Learn more</a>
        </p>
      </div>
      <div className={styles.courseContentParent} style={{ width: "698px" }}>
        <h1 className={styles.heading}>Course content</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h6 className={styles.tagLine}>
            101 sections • 636 lectures • 58h 21m total length
          </h6>
          <button className={styles.expandBtn}>Expand all sections</button>
        </div>
      </div>
    </>
  );
}

export { ProductDetail };
