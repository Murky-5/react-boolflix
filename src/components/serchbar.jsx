import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const searched = createContext();

const BeSearched = ({ children }) => {
  const src = (a, b) => `https://image.tmdb.org/t/p/w500${a[b]}`;
  const [search, setsearch] = useState("caraibi");

  const [res, setres] = useState([]);

  useEffect(
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=" +
          String(search)
      )
      .then(({ data }) => {
        setres(data.results), [search];
      })
  );

  console.log(res);
  return (
    <searched.Provider value={(search, setsearch)}>
      <div className="container">
        {res.map((a) => {
          <div className="card">
            <div>
              <img src={src(a, 1)} alt={src(a, 10)} />
            </div>
            <div>
              <div>{a[12] / 2}</div>
              <div>{a[10]}</div>
              <div>{a[6]}</div>
            </div>
          </div>;
        })}
      </div>
      {children}
    </searched.Provider>
  );
};

const UseSearch = () => {
  return useContext(searched);
};

export { BeSearched, UseSearch };
