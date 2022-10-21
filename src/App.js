import './App.css';
import etsyData from "./data/etsy.json";
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing items={etsyData} />
    </div>
  );
}

export default App;
