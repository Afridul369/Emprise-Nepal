import "./App.css";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import RootLayoutPart from "./Layouts/RootLayoutPart/RootLayoutPart";
import { Route, Routes } from "react-router";
import TourDetail from "./Pages/TourDetail";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayoutPart />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/tour" element={<TourDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
