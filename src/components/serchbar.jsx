import axios from "axios";
import { useState, createContext, useContext } from "react";

const searched = createContext();

const InputOut = (input = "a") => {
  input;
};

const BeSearched = ({ children }) => {
  const src = (a, b) => `https://image.tmdb.org/t/p/w500${a[b]}`;
  const [search, setsearch] = useState("a");

  useState(
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${InputOut}`
      )
      .then(({ results }) => {
        {
          results.map((a) => {
            <>
              <div className="container">
                <div className="card">
                  <div>
                    <img src={src(a, 1)} alt={src(a, 10)} />
                  </div>
                  <div>
                    <div>{a[12] / 2}</div>
                    <div>{a[10]}</div>
                    <div>{a[6]}</div>
                  </div>
                </div>
              </div>
            </>;
          });
        }
      })
  );
  return (
    <searched.Provider srcd={(search, setsearch)}>{children}</searched.Provider>
  );
};

const UseSearch = () => {
  return useContext(searched);
};

export { BeSearched, UseSearch, InputOut };
