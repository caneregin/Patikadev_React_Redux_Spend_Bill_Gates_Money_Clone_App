import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Navi from './components/Navi';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navi/>
      <Body/>
    </div>
  );
}

export default App;
