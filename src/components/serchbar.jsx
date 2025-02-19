import { useState, createContext, useContext, useEffect } from "react";

const Searched = createContext();

const BeSearched = ({ children }) => {
  let src,
    ret = "";
  const [search, setsearch] = useState({ src: "caraibi", ret: [] }); // [(src = "caraibi"), (ret = [])]
  return (
    <Searched.Provider value={{ search, setsearch }}>
      {children}
    </Searched.Provider>
  );
};

const useSearch = () => {
  return useContext(Searched);
};

export { BeSearched, useSearch };
