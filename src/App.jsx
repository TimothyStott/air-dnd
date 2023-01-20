import Card from "./components/Card";
import CardData from "./CardData"
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./style.css";

function App() {
  const cards = CardData.map(card => {
    return <Card
      key={card.id}
      {...card}
    />
  })

  return (
    <div className="main-container">
      <Header />
      <Hero />
      <div className="card-grid">
        {cards}
      </div>
    </div>
  )
}

export default App

