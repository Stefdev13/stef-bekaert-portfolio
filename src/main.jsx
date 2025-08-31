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
import ErrorPage from "./pages/ErrorPage.jsx";

function fallBackRender() {
  console.log("we here");

  return <ErrorPage message="something went wrong..." />;
}

let router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/about",
    element: (
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <AboutPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/work",
    element: (
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <WorkPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/contact",
    element: (
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <ContactPage />
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <ErrorPage message="This page doesn't seem to exist..." />
      </ErrorBoundary>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={fallBackRender}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
