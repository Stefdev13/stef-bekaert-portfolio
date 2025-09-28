import React from "react";

function ExperienceItem(props) {
  const item = props.item;

  return <div>{item.name}</div>;
}

export default ExperienceItem;
