import React, { useState } from "react";
import Town from "./Town";
function City(props) {
  const [expandCity, setExpandCity] = useState(false);
  let { cityInfo } = props;

  let handleClick = () => {
    setExpandCity(!expandCity);
  };

  return (
    <>
      <p onClick={handleClick} id={"city"+props.idx}>{cityInfo.name}</p>
      {expandCity ? (
        <>
          {cityInfo.towns.map((val, idx) => {
            return <Town key={"Town" + (1 + idx)} idx={1+idx} townInfo={val} />;
          })}
        </>
      ) : null}
    </>
  );
}
export default City;
