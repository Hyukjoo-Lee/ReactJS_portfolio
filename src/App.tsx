import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import NavBar from "./components/Navbar";
import Start from "./components/0.Start/Start";
import IntroPage from "./components/1.Intro/IntroPage";
import SkillsPage from "./components/2.Skills/SkillsPage";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Background />
          <NavBar />
          <Start />
          <IntroPage />
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
