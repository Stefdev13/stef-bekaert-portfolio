import React from "react";

function SkillSet(props) {
  const skillSet = props.skillSet;

  return (
    <div>
      <div>
        <h2>{skillSet.title}</h2>
        {skillSet.subTitle && <p>skillSet.subTitle</p>}
      </div>
      skillSet.lists.map()
    </div>
  );
}

export default SkillSet;
