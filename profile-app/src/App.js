//import logo from './logo.svg';
import './App.css';
import Commerce from "@chec/commerce.js";

function App() {
  const commerce=new Commerce('pk_34213fc645bbd971c6fbe34f2189fb62e6a32eb61a00b');
  commerce.products.list().then(response=>console.log(response.data));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
