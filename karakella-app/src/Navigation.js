import React from "react";


class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {fullScreen:false};
      this.changeNavigationDisplay=this.changeNavigationDisplay.bind(this);
    }
  
    componentDidMount() {
      
    }
  
    componentWillUnmount() {
  
    }
  
    changeNavigationDisplay(){
       
       this.setState(function(state, props) {
        return {
            fullScreen:!state.fullScreen
        };
      });
    }

   
  
    render() {
      return (
        <div id="navigation" className={this.state.fullScreen ? "fullScreen" : ""}>
            <div className="navigation-header">
            <h1 className="navigation-title">KARRAKELA</h1>
            <div className="toggle-menu" onClick={this.changeNavigationDisplay}>
                <div className= "bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            
            </div>
            <ul className="navList">
                <li>Accueil</li>
                <li>L'équipage</li>
                <li>Le bateau</li>
                <li>Cartographie</li>
                <li>Statistiques</li>
            </ul>

        </div>
      );
    }
  }
  
  export default Navigation;



