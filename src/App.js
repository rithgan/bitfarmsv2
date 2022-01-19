import ResponsiveAppBar from "./components/navigationaBar/AppBar";
import Farms from "./components/farms/Farms";
import Stake from "./components/stake/Stake";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Stake />} />
          <Route path="/farms" element={<Farms />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
