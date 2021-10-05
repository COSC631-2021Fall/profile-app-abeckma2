//import logo from './logo.svg';
import './App.css';
import Commerce from "@chec/commerce.js";

function App() {
  const commerce=new Commerce('pk_34213fc645bbd971c6fbe34f2189fb62e6a32eb61a00b');
  commerce.products.list().then(response=>console.log(response.data));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
