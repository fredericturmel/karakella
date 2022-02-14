import React from "react";

class Incrementer extends React.Component{
    constructor(props){
        super(props);
        this.timer=null;
        this.state={compteur:this.props.start}

   }


    componentDidMount(){
        window.setInterval(() => {
            this.incrementationCompteur();
        }, 1000);
    }

    componentWillUnmount(){
        window.clearInterval(this.timer);
    }

    incrementationCompteur(){
        this.setState((state,props)=>{return({compteur:state.compteur +props.step})})
    }

    render(){
        return(
            <div>{this.props.children} {this.state.compteur}</div>
        )
    }

   
  }

  Incrementer.defaultProps={
      start:0,
      step:1,
  };

  export default Incrementer