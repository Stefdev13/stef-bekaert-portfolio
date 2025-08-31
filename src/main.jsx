import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import PopupMessage from "./components/PopupMessage.jsx";

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

function fallBackRender() {
  return (
    <PopupMessage
      type={"danger"}
      show={true}
      dialogMessage={"An error occured"}
      popupDurationInMs={5000}
    />
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary fallback={fallBackRender}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
