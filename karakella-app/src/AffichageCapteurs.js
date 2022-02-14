import React from "react";


class AffichageCapteurs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {chronometre:{day:0,hour:0,min:0,sec:0}};
    }
  
    componentDidMount() {
    
    }
  
    componentWillUnmount() {
    
    }
  
    
  
    render() {
      return (
        <div className="sensorDashboard">
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
         <AffichageDonnee value="3" unit="Kts"></AffichageDonnee>
        </div>
      );
    }
  }
  
  function AffichageDonnee(props){
    return(
        <div className="dataBlock">
            <div className="dataValue">{props.value}</div>
            <div className="dataUnit">{props.unit}</div>
        </div>
    )
}
  export default AffichageCapteurs;