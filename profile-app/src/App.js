//import logo from './logo.svg';
import Module1 from "./components/module1";
import {Module2} from "./components/module2";
import {Module3} from "./components/module3";
import Module4 from "./components/module4";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/navbar";
import './App.css';
import Commerce from "@chec/commerce.js";

function App() {
  const commerce=new Commerce('pk_34213fc645bbd971c6fbe34f2189fb62e6a32eb61a00b');
  commerce.products.list().then(response=>console.log(response.data));
  const useStateArray=["white","#000000","powderblue"];
  const colorArray=["black","#202A44","brown"];
  const[themeId,setThemeId]=useState(0);
  const[colorId,setColorId]=useState(0);
  const switchTheme=()=>{
    setThemeId((id)=>(id+1)%3);
  }
  const switchColor=()=>{
    setColorId((id)=>(id+1)%3);
  }
  const handleKeyDown=(event)=>
  {
    switch(event.key)
    {
      case "0":
      case "1":
      case "2":
      default:
        setColorId(parseInt(event.key));
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
      <div style={{color:colorArray[colorId]}}>
      <header>
        <Navbar />
        <h1>MY REACT APP</h1>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path={["/module1/:id", "/module1"]}><Module1 /></Route>
            <Route path={["/module2", "/module2/:id"]}><Module2 /></Route>
            <Route path={["/module3", "/module3/:id"]}><Module3 /></Route>
            <Route path={["/module4/:id", "/module4"]}><Module4 /></Route>
          </Switch>
        </BrowserRouter>
        <div><button onClick={switchTheme}>button</button></div>
        <Module4 />
      </main>
      </div>
    </div>
  );
}

export default App;
