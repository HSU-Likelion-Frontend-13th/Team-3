import GlobalStyle from "./styles/globalStyles";
import Header from "./components/home/Header";
import IntroSection from "./components/home/IntroSection";
import AboutSection from "./components/home/AboutSection";
import HobbySection from "./components/home/HobbySection";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Header />
      </header>
    <nav>
      <IntroSection/>
      <AboutSection/>
      <HobbySection/>
    </nav>
    </div>
  );
}

export default App;
