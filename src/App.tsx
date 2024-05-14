import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Biography from "./routes/Biography";
import Gallery from "./routes/Gallery";
import School from "./routes/School";
import Contacts from "./routes/Contacts";
import ScrollToTop from "./utils/scrollToTop";
import { StyledEngineProvider } from "@mui/styled-engine";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/biography",
    element: (
      <>
        <ScrollToTop />
        <Biography />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <ScrollToTop />
        <Gallery />
      </>
    ),
  },
  {
    path: "/school",
    element: (
      <>
        <ScrollToTop />
        <School />
      </>
    ),
  },
  {
    path: "/contacts",
    element: (
      <>
        <ScrollToTop />
        <Contacts />
      </>
    ),
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "Della Respira, serif",
  },
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
