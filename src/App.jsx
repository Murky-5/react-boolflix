import "./App.css";
import Default from "./layout/default";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BeSearched } from "./components/serchbar";
import Main from "./pages/main";

export default () => {
  return (
    <>
      <BeSearched>
        <BrowserRouter>
          <Routes>
            <Route element={<Default />}>
              <Route index element={<Default />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BeSearched>
    </>
  );
};
