import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const CasesPage = lazy(() => import("./pages/CasesPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
