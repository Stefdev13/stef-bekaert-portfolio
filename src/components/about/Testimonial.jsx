import React from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "../../context/ThemeProvider.jsx";
import * as Constants from "../../constants/styling-constants";
import quotesDark from "../../assets/images/quotes-dark.png";
import quotesLight from "../../assets/images/quotes-light.png";

const useStyles = createUseStyles({
  testimonial: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    height: "200px",
    minWidth: "250px",

    padding: {
      top: "20px",
      right: "20px",
      bottom: "20px",
      left: "20px",
    },

    backgroundColor: (props) =>
      props.theme ? Constants.LIGHT_BG_L3 : Constants.DARK_BG_L3,

    border: {
      width: "1px",
      style: "solid",
      radius: "12px",
    },
    borderColor: (props) =>
      props.theme ? Constants.LIGHT_BORDER : Constants.DARK_BORDER,

    boxShadow: (props) =>
      `3px 3px 12px 2px ${
        props.theme ? Constants.LIGHT_SHADOW : Constants.DARK_SHADOW
      }`,

    "& p": {
      fontFamily: Constants.FONT_QUICKSAND,
    },
  },
  quotesImg: {
    width: "25px",
    height: "25px",
  },
  quote: {
    flexGrow: 1,
    fontSize: "1.7vh",
    fontWeight: "500",
    lineHeight: "1.3",
    textOverflow: "ellipsis",

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_MUTED : Constants.DARK_TEXT_MUTED,

    margin: "0px",
  },
  name: {
    fontSize: ".9rem",
    fontWeight: "700",
    textOverflow: "ellipsis",

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,

    margin: "0px",
  },
  function: {
    fontSize: ".7rem",
    fontWeight: "500",
    textOverflow: "ellipsis",

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_MUTED : Constants.DARK_TEXT_MUTED,

    margin: "0px",
  },
});

function Testimonial(props) {
  const testimonial = props.testimonial;

  const theme = useTheme();
  const classes = useStyles({ theme: theme, quote: testimonial.quote });

  return (
    <div className={classes.testimonial}>
      <img
        src={theme ? quotesDark : quotesLight}
        alt="Quotes icon"
        className={classes.quotesImg}
      />
      <p className={classes.quote}>{testimonial.quote}</p>
      <div>
        <p className={classes.name}>{testimonial.name}</p>
        <p className={classes.function}> {testimonial.function}</p>
      </div>
    </div>
  );
}

export default Testimonial;
