import React from "react";

function Town(props) {
  let { townInfo } = props;
  return (
    <>
      <p id={"town"+props.idx}>{townInfo.name}</p>
    </>
  );
}
export default Town;
