import './App.css';
import Navbar from './components/Navbar/Navbar';
import { SearchBox } from './components/Body/SearchBox';

function App() {
  return (
    <div className="App">
          <Navbar />
          <SearchBox />
    </div>
  );
}

export default App;