import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <nav>
        <Nav />
      </nav>
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
}

export default App;
