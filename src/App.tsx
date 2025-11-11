import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Biography from "./routes/Biography";
import Gallery from "./routes/Gallery";
import School from "./routes/School";
import Contacts from "./routes/Contacts";
import ScrollToTop from "./utils/scrollToTop";
import { StyledEngineProvider } from "@mui/styled-engine";
import {
  createTheme,
  outlinedInputClasses,
  ThemeProvider,
} from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Gallery />
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
    path: "/about-me",
    element: (
      <>
        <ScrollToTop />
        <Home />
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
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#b0a300",
          "--TextField-brandBorderHoverColor": "#b0a300",
          "--TextField-brandBorderFocusedColor": "#b0a300",
          "--TextField-requiredAsteriskColor": "#b0a300",
          "& label.Mui-focused": {
            color: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&::before, &::after": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "2px solid var(--TextField-brandBorderColor)",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
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
