import React, { useState } from "react";
import City from "./City";
function State(props) {
  const [expandState, setExpandState] = useState(false);
  let { stateInfo } = props;

  let handleClick = () => {
    setExpandState(!expandState);
  };

  return (
    <>
      <p onClick={handleClick} id={'state'+props.idx}>{stateInfo.name}</p>
      {expandState ? (
        <>
          {stateInfo.cities.map((val, idx) => {
            return <City key={"City" + (1 + idx)} idx={1+idx} cityInfo={val} />;
          })}
        </>
      ) : null}
    </>
  );
}
export default State;
