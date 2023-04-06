import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsContextProvider } from "./contexts/NewsContext";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  // "/" <= popup
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NewsContextProvider>
              <Dashboard />
            </NewsContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
