import './App.css';

import Nav from './components/Nav';
import Players from './components/Players';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Nav />
      <div id='generate-btn'>
      <button>Generate 4 X 4 Game</button>
      </div>
      <Players />
      <Footer />
    </main>
  );
}

export default App;
