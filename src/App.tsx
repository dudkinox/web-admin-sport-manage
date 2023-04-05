import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewsContextProvider } from "./contexts/NewsContext";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
