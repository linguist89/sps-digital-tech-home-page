import './App.css';
import Header from './Header';
import Footer from './Footer';
import BodyComponent from './BodyComponent';
import Products from './Products';
import Divider from './Divider';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BodyComponent></BodyComponent>
      <Divider></Divider>
      <Products></Products>
      <div style={{height: '400px'}}></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
