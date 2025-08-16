import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/work",
    Component: WorkPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
