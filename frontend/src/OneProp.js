import React from "react";
const OneProp = (props) => {
  const propertydts = props.propertyval;
  console.log("in one prop", props);
  return (
    <div style="{{padding:12}}">
      <h4>{propertydts.title}</h4>
    </div>
  );
};

export default OneProp;
