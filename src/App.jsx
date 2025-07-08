import { Routes, Route } from "react-router-dom";

import Layout from "./Routes/Layout";

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomePage />} path="/" exact />
        <Route
          element={<ProductDetailsPage />}
          path={`product-details/:slug`}
        />
      </Route>
    </Routes>
  );
}

export default App;
