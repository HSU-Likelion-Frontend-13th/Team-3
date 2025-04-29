import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/Header"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Hobby from "./components/Hobby"

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <Header />
      </header>
      {/* <nav>
        <Nav />
      </nav> */}
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Hobby />
      </section>
    </div>
  );
};

export default App;
