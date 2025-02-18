import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { UseSearch } from "./serchbar";

export default () => {
  const { search, setsearch } = UseSearch();
  const [links, setlinks] = useState({ Search: "" });

  const onTimeUpdater = ({ target }) => {
    setlinks((a) => ({ ...a, [target.name]: target.value }));
    setsearch({ [target.name]: target.value });
  };

  return (
    <>
      <div className="Container">
        <div>
          <NavLink to="/">BOOLFLIX</NavLink>
        </div>
        <div>
          <input name="Search" type="text" onChange={onTimeUpdater} />
        </div>
      </div>
    </>
  );
};
