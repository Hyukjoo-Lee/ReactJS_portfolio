import { Navbar } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import NavBar from "./components/Navbar";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Background />
          <NavBar />
          {/* <Intro />
          <Skills />
          <TimeLine /> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
