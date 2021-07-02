import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contain from './components/Contain';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">

      <Counter />

      {/* <Message /> */}

      {/* <Header />
      <Footer>
        <input className="form-control" readOnly placeholder="enter name"></input>
      </Footer>
      <Contain />
      <Header name="zami"/>
      <Header name="arafat"/>
      <Header name="jihan"/> */}
      
    </div>
  );
}

export default App;
