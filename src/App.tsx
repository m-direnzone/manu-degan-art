import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Navbar />
      <h1>{t("titolo")}</h1>
      <h2>{t("sottotitolo")}</h2>
    </div>
  );
}

export default App;
