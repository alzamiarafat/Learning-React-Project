import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contain from './components/Contain';


function App() {
  return (
    <div className="App">

      <Header />
      <Footer>
        <input className="form-control" readOnly placeholder="enter name"></input>
      </Footer>
      <Contain />
      <Header name="zami"/>
      <Header name="arafat"/>
      <Header name="jihan"/>
      
    </div>
  );
}

export default App;
