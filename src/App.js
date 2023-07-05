import './App.css';
import { Button } from 'flowbite-react';

function App() {
  return (
    <div className="App">
      <Button onClick={() => {
        alert("Let's goooo");
      }}>Click me!</Button>
    </div>
  );
}

export default App;
