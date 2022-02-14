import logo from './logo.svg';
import './App.css';
import Chronometre from './Chronometre';
import Carto from './CartoTest';
import Navigation from './Navigation';
import Incrementer from './Incrementer';
import AffichageCapteurs from './AffichageCapteurs';


function App() {
  
  return (
    <div className="App">
      <Navigation></Navigation>
      <div className="header-app">

        <h1>Accueil</h1>
        <Chronometre dateDepart={new Date('2022-01-26T16:00:00')}></Chronometre>
      </div>
      <AffichageCapteurs/>
      
      <div className="messagesSpot">messag7esSpot 3</div>
      <div className="cartographie">carto 4</div>
      <div className="filActualites">actualites 5</div>
      <div className="contact">Contact Frederic TURMEL 6</div>
      {/*<Chronometre dateDepart={new Date('2022-01-26T16:00:00')}></Chronometre>
      <Incrementer >Valeur du compteur:</Incrementer>
      <Incrementer start={10} >Valeur du compteur:</Incrementer>
      <Incrementer  step={10}>Valeur du compteur:</Incrementer>
      <Incrementer start={10} step={10}>Valeur du compteur:</Incrementer>*/}
      
     
    </div>
  );
}

export default App;
