import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
