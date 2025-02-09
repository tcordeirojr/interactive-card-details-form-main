import './App.css'
import DataCard from "/src/components/dataCard/DataCard.jsx"
import Card from "/src/components/card/Card.jsx"
import useDataCard from "/src/hooks/useDataCard"

function App() {
  return (
    <>
      <Card/>
      <DataCard/>
    </>
  )
}

export default App
