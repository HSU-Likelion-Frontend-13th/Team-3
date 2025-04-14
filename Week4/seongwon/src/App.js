import React from "react";
import globalStyles from "./styles/globalStyles"
import Header from "./components/Header"
import Nav from "./components/Nav";
import Start from "./components/Nav";
import About from "./components/Nav";
import Hobby from "./components/Nav";

function App() {
    return (
      <div className="App">
        <globalStyle />
        <header>
          <Header />
        </header>
        <nav>
            <Nav />
        </nav>
            <section>
                <Start />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Hobby />
            </section>
    
      </div>
    );
  }

  export default App;