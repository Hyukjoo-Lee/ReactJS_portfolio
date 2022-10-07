import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import NavBar from "./components/Navbar";
import Skills from "./components/Skills/Skills";
import SkillsPage from "./components/Skills/SkillsPage";
import Start from "./components/Start/Start";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Background />
          <NavBar />
          <Start />
          <SkillsPage />
          {/* <Intro />
          <Skills />
          <TimeLine /> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
