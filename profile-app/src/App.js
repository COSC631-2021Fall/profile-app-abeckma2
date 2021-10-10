//import logo from './logo.svg';
import Module1 from "./components/module1";
import Module2 from "./components/module2";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/navbar";
import './App.css';
import Commerce from "@chec/commerce.js";

function App() {
  const commerce=new Commerce('pk_34213fc645bbd971c6fbe34f2189fb62e6a32eb61a00b');
  commerce.products.list().then(response=>console.log(response.data));
  const useStateArray=["white","tomato","powderblue"];
  const[themeId,setThemeId]=useState(0);
  const switchTheme=()=>{
    setThemeId((id)=>(id+1)%3);
  }
  const handleKeyDown=(event)=>
  {
    switch(event.key)
    {
      case "0":
      case "1":
      case "2":
        setThemeId(parseInt(event.key));
        break;
    }
  }
  useEffect(
    ()=>{
      window.addEventListener("keydown",handleKeyDown);
    }
  );
  return (
    <div style={{backgroundColor:useStateArray[themeId]}} className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <BrowserRouter>
          <Route path="/module1/:id">click here for mod1<Module1 /></Route>
          <Route path="/module2/:id">click here for mod2<Module2 /></Route>
        </BrowserRouter>
        <div><button onClick={switchTheme}>button</button></div>
      </main>
    </div>
  );
}

export default App;
