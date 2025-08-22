import { createUseStyles } from "react-jss";
import CtaBtn from "../../components/CtaBtn.jsx";
import * as Constants from "../../constants/styling-constants.js";
import { useTheme } from "../../context/ThemeProvider.jsx";
import ChipList from "../ChipList.jsx";

const useStyles = createUseStyles({
  projectWrapper: {
    display: "flex",
    flexDirection: (props) =>
      props.project.id % 2 === 0 ? "row-reverse" : "row",
    alignItems: "center",
    gap: "80px",

    padding: {
      top: "80px",
      bottom: "80px",
      right: "30px",
      left: "30px",
    },
    paddingLeft: (props) => (props.project.id % 2 === 0 ? "12vw" : "4vw"),
    paddingRight: (props) => (props.project.id % 2 === 0 ? "4vw" : "12vw"),

    backgroundColor: (props) =>
      props.project.id % 2 === 0
        ? props.theme
          ? Constants.LIGHT_BG_L2
          : Constants.DARK_BG_L2
        : props.theme
        ? Constants.LIGHT_BG_L1
        : Constants.DARK_BG_L1,
  },
  image: {
    height: "auto",
    width: "45%",

    border: {
      width: "1px",
      style: "solid",
      radius: "15px",
    },
    borderColor: (props) =>
      props.theme ? Constants.LIGHT_BORDER : Constants.DARK_BORDER,

    boxShadow: (props) =>
      props.theme
        ? `3px 3px 12px 6px ${Constants.LIGHT_SHADOW}`
        : `4px 4px 12px 3px ${Constants.DARK_SHADOW}`,
  },
  projectDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",

    alignItems: (props) => (props.project.id % 2 === 0 ? "end" : "start"),

    textAlign: (props) => (props.project.id % 2 === 0 ? "end" : "start"),
  },
  header: {
    "& h2": {
      fontFamily: Constants.FONT_BRICOLAGE_GROTESQUE,
      fontSize: "2.2rem",
      fontWeight: "800",

      margin: "0",

      color: (props) =>
        props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,
    },
    "& p": {
      fontFamily: Constants.FONT_IBM_PLEX_MONO,
      fontSize: ".8rem",
      fontWeight: "600",

      margin: "0",

      color: (props) =>
        props.theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,
    },
  },
  description: {
    fontFamily: Constants.FONT_QUICKSAND,
    fontSize: "1rem",
    fontWeight: "500",

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_MUTED : Constants.DARK_TEXT_MUTED,
  },
  chipsLists: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    flexWrap: "wrap",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },
});

function Project(props) {
  const theme = useTheme();
  const project = props.project;

  const stylingProps = {
    theme: theme,
    project: project,
  };

  const classes = useStyles(stylingProps);

  const colours = [
    {
      bg: theme ? Constants.ACCENT_PRIMARY_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_PRIMARY,
      border: theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,
    },
    {
      bg: theme ? Constants.ACCENT_INFO_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_INFO,
      border: theme ? Constants.ACCENT_INFO_DARK : Constants.ACCENT_INFO,
    },
    {
      bg: theme ? Constants.ACCENT_SUCCESS_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_SUCCESS,
      border: theme ? Constants.ACCENT_SUCCESS_DARK : Constants.ACCENT_SUCCESS,
    },
    {
      bg: theme ? Constants.ACCENT_WARNING_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_WARNING,
      border: theme ? Constants.ACCENT_WARNING_DARK : Constants.ACCENT_WARNING,
    },
    {
      bg: theme ? Constants.ACCENT_DANGER_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_DANGER,
      border: theme ? Constants.ACCENT_DANGER_DARK : Constants.ACCENT_DANGER,
    },
  ];

  function getChipLists() {
    return project.chipLists.map((list, i) => {
      let index = i;

      if (index > colours.length) {
        index = index - Math.floor(index / colours.length) * colours.length;
      }

      return (
        <ChipList
          key={i}
          title={list.title}
          listOfChipValues={list.chips}
          colours={colours[index]}
        />
      );
    });
  }

  return (
    <div className={classes.projectWrapper}>
      <img
        src={project.projectImg}
        alt={`Image of the project ${project.name}`}
        className={classes.image}
      />
      <div className={classes.projectDetails}>
        <div className={classes.header}>
          <h2>{project.name}</h2>
          <p>{project.subTitle}</p>
        </div>
        <p className={classes.description}>{project.description}</p>
        <div className={classes.chipsLists}>{getChipLists()}</div>
        <div className={classes.buttonWrapper}>
          {project.projectLink && (
            <CtaBtn
              btnType="project link"
              btnText="Go to project"
              actionOnClick={() => {
                window.open(project.projectLink, "_blank");
              }}
            />
          )}
          {project.projectSourceCode && (
            <CtaBtn
              btnType="project source"
              btnText="Source code"
              actionOnClick={() => {
                window.open(project.projectSourceCode, "_blank");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
