import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Start from "./components/Start";
import About from "./components/About";
import Hobby from "./components/Hobby";

function App() {
    return (
      <div className="App">

        <GlobalStyle />
          <Header />
            <Nav />
                <Start />
                <About />
                <Hobby />
      </div>
    );
  }

  export default App;