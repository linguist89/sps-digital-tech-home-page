import './App.css';
import Header from './Header';
import Footer from './Footer';
import BodyComponent from './BodyComponent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyComponent></BodyComponent>
      <div style={{height: '400px'}}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
