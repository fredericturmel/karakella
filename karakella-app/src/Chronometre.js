import React from "react";


class Chronometre extends React.Component {
    constructor(props) {
      super(props);
      this.state = {chronometre:{day:0,hour:0,min:0,sec:0}};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
     
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
        //Calcul du temps passé depuis le départ
      this.setState({chronometre: this.dateDiff(this.props.dateDepart,new Date()) }
      );
    }

    dateDiff(date1, date2){
        var diff = {}                           // Initialisation du retour
        var tmp = date2 - date1;
     
        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes
     
        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes
     
        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures
         
        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;
         
        return diff;
    }
  
    render() {
      return (
        <div id="chronometre">
            <div className="bloc-chronometre">
                <div className="day valeur-chrono">{this.state.chronometre.day}</div>
                <div className="unite-chrono">JOURS</div>
            </div>
              <p className="text-centered">-</p>
            <div className="bloc-chronometre">
                <div className="hour valeur-chrono">{this.state.chronometre.hour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</div>
                <div className="unite-chrono">H</div>
            </div>
            <div className="bloc-chronometre">
                <div className="minute valeur-chrono">{this.state.chronometre.min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</div>
                <div className="unite-chrono">MIN</div>
            </div>
            <div className="bloc-chronometre">
                <div className="seconde valeur-chrono">{this.state.chronometre.sec.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</div>
                <div className="unite-chrono">SEC</div>
            </div>

          
        </div>
      );
    }
  }
  
  export default Chronometre;