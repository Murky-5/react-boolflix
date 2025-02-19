import axios from "axios";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearch } from "./serchbar";

export default () => {
  const { search, setsearch } = useSearch();
  const [links, setlinks] = useState({ Search: "" });

  const onTimeUpdater = ({ target }) => {
    setlinks((a) => ({ ...a, [target.name]: target.value }));
    setsearch({ [target.name]: target.value });
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "4efc0e2afb9721c66d71ae3341fdf25c",
          language: "it-IT",
          query: links,
        },
      })
      .then(({ data }) => {
        setsearch((a) => ({ ...a, ret: data.results }));
      });
  }, [search.src]);

  return (
    <>
      <div className="Container">
        <div>
          <NavLink to="/">BOOLFLIX</NavLink>
        </div>
        <div>
          <input
            name="0"
            type="search"
            placeholder="(^_^)"
            onChange={onTimeUpdater}
          />
          <button type="button" onClick={onTimeUpdater}>
            {("{{{(>_<)}}}" && search.src) || "﹏。*﹏*﹏﹏"}
          </button>
        </div>
      </div>
    </>
  );
};
