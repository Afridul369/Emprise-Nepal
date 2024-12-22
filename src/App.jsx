import "./App.css";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import RootLayoutPart from "./Layouts/RootLayoutPart/RootLayoutPart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayoutPart />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
