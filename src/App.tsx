import './index.css';
import { Component, ReactNode } from "react";
import logo from "./logo.png";

export default class App extends Component {
    render (): ReactNode {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  setTimeout (((): void => {
    const textArray: Array<string> = ["moderación", "diversión", "integración", "musica"];
    const featureText = document.getElementById("feature")!;
    featureText.innerHTML = textArray[0];
    let index: number = 1;
    setInterval(() => {
    if (textArray.length == ++index) index = 0;
     featureText.innerHTML = textArray[index];
  }, 4000);
  }), 2000)
  
  return (

    <><div className="contenedor">
      <nav className="navegacion">
            <ul className="menu">
                <li><a href= "index.html">Inicio</a></li>
                <li><a href= "https://discord.com/api/oauth2/authorize?client_id=994667997320978553&permissions=1110521870421&scope=bot%20applications.commands">Invitame</a></li>
                <li><a href= "https://discord.gg/rPVmYjzqKd">Soporte</a></li>
                <li><a href= "#">Documentación</a></li>
                <li className='discord'><a href= "#">Login Discord</a></li>
            </ul>
        </nav>
        <img src= {logo} className="logo" />
        <h2 className='titulo'> Dylan Bot <br/> El mejor Bot de <br/><span id='feature'></span>.</h2>
        <div>
        
        </div>
    </div>
    
    {/* Parte Informativa */}
    <div className = "informacion">
    <h1>Informacion General de Dylan</h1>
    
    </div>
    </>
  );
}
}
