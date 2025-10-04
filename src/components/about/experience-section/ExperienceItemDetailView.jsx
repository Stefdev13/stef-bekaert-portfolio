import { useState } from "react";
import styles from "./ExperienceItem.module.css";
import CtaBtn from "../../CtaBtn";
import { useTheme } from "../../../context/ThemeProvider";

function ExperienceItemDetailView(props) {
  const item = props.item;
  const isOpen = props.isOpen;
  const onClosedCallback = props.onClosedCallback;

  const theme = useTheme();

  function formatDate(date) {
    let year = date.split("-")[0];
    let month = "";

    switch (date.split("-")[1]) {
      case "01":
        month = "January";
        break;
      case "02":
        month = "February";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "August";
        break;
      case "09":
        month = "September";
        break;
      case "10":
        month = "October";
        break;
      case "11":
        month = "November";
        break;
      case "12":
        month = "December";
        break;
    }

    return `${month} ${year}`;
  }

  return (
    <div
      className={`${
        isOpen ? styles.detailViewOverlayOpen : styles.detailViewOverlayClosed
      }`}
    >
      <section className={styles.dateAndCloseSection}>
        <span className={styles.completedOn}>
          Completed:{" "}
          <span className={styles.completedDate}>
            {formatDate(item.item.date)}
          </span>
        </span>
        <button className={styles.closeBtn} onClick={onClosedCallback}>
          <img
            src={theme ? "/images/cross-dark.png" : "/images/cross-light.png"}
            alt="Close"
          />
        </button>
      </section>

      {item.item.projectImg && (
        <section className={styles.heroImgSection}>
          <img
            src={item.item.projectImg}
            alt="Project image"
            className={styles.headerImage}
          />
        </section>
      )}

      <section className={styles.mainContentSection}>
        <section className={styles.titleSection}>
          <h1>{item.item.name}</h1>
          {item.item.subTitle && <p>{item.item.subTitle}</p>}
          <div
            className={`${styles.typeTag} ${
              item.type.toLowerCase() == "course"
                ? styles.course
                : styles.project
            }`}
          >
            {item.type}
          </div>
        </section>

        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionHeader}>Description</h2>
          <p>{item.item.description}</p>
        </section>

        <section className={styles.technologiesSection}>
          <h2 className={styles.sectionHeader}>
            {item.type == "Project" ? "Tech stack" : "Technologies"}
          </h2>
          <ul className={styles.techList}>
            {item.technologyList.map(function renderTechnologies(technology) {
              return (
                <li
                  key={technology.name}
                  className={styles.technologyTagDetail}
                >
                  <img src={technology.icon} alt={technology.name} />
                  <p>{technology.name}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section className={styles.linksSection}>
          <h2 className={styles.sectionHeader}>Links</h2>
          <div className={styles.buttonRow}>
            {item.type == "Course" && item.item.link && (
              <CtaBtn
                btnType="project link"
                btnText="Go to course"
                actionOnClick={() => {
                  window.open(item.item.link, "_blank");
                }}
              />
            )}
            {item.type == "Project" && item.item.projectLink && (
              <CtaBtn
                btnType="project link"
                btnText="Visit project"
                actionOnClick={() => {
                  window.open(item.item.projectLink, "_blank");
                }}
              />
            )}
            {item.type == "Project" && item.item.projectSourceCode && (
              <CtaBtn
                btnType="project source"
                btnText="Source code"
                actionOnClick={() => {
                  window.open(item.item.projectSourceCode, "_blank");
                }}
              />
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

export default ExperienceItemDetailView;
