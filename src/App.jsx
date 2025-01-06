import "./App.css";
import Home from "./Pages/Home";
import SearchResults from "./Pages/SearchResults";
import RootLayoutPart from "./Layouts/RootLayoutPart/RootLayoutPart";
import TourDetail from "./Pages/TourDetail";
import Login from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayoutPart />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/tour" element={<TourDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

  
