import { Navigate, Routes, Route } from "react-router-dom";
import StoreList from "./components/StoreList";
import NewStore from "./components/NewStore";
import StoreDetail from "./components/StoreDetail";
import EditStore from "./components/EditStore";
import NavBar from "./components/NavBar";
import { Fragment } from "react";

function App() {
  const baseUrl = "http://localhost:8000/api/shops";
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/stores" />} />
          <Route path="/stores/" element={<StoreList baseUrl={baseUrl} />} />
          <Route path="/stores/new" element={<NewStore baseUrl={baseUrl} />} />
          <Route
            path="/stores/:id"
            element={<StoreDetail baseUrl={baseUrl} />}
          />
          <Route
            path="/stores/:id/edit"
            element={<EditStore baseUrl={baseUrl} />}
          />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
