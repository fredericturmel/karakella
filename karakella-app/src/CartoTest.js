


import React, { isValidElement } from "react";
import L from "leaflet";
import {} from 'leaflet-velocity';
import data from "./wind.json"

class Carto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
    this.initMap();
    }
  
    componentWillUnmount() {
     
    }
    
    initMap(){
        var map = L.map('map').setView([51.505, -0.09], 13);
 L.tileLayer('https://api.mapbox.com/styles/v1/fredericturmel/ckyvtg98e004e15phdr7iju1u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnJlZGVyaWN0dXJtZWwiLCJhIjoiY2pzeWtyNnB0MDdhNTQzdWlvamw3ejVidCJ9.brbXKmQeVGmr7jbY9ETIAQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
   
    style: 'mapbox://styles/fredericturmel/ckyvtg98e004e15phdr7iju1u',
    tileSize: 256,
    zoom: -1,
    format:'.mvt',
    accessToken: 'pk.eyJ1IjoiZnJlZGVyaWN0dXJtZWwiLCJhIjoiY2t5dnY0eHBvMDJjajJ2czdpOHVqcmRvZiJ9.jpDFccax4VzzJ4f4EZknMQ'
}).addTo(map);

/* var popup = L.popup({className:'test'})
    .setLatLng([51.505, -0.09])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);
    
  
    var states = [{
      "type": "Feature",
      "properties": {"party": "Republican"},
      "geometry": {
          "type": "LineString",
          "coordinates": [
              [-104.05, 48.99],
              [-97.22,  48.98],
              [-96.58,  45.94],
              [-104.03, 45.94],
              [-104.05, 48.99]
          ]
      }
  }, {
      "type": "Feature",
      "properties": {"party": "Democrat"},
      "geometry": {
          "type": "Polygon",
          "coordinates": [[
              [-109.05, 41.00],
              [-102.06, 40.99],
              [-102.03, 36.99],
              [-109.04, 36.99],
              [-109.05, 41.00]
          ]]
      }
  }];
  
  L.geoJSON(states, {
      style: function(feature) {
          switch (feature.properties.party) {
              case 'Republican': return {color: "#ff0000"};
              case 'Democrat':   return {color: "#0000ff"};
          }
      }
  }).addTo(map); */
  
  
 //**********************************************
 const jsonData= require('./wind.json');
 console.log(jsonData); 
 var velocityLayer = L.velocityLayer({
  displayValues: true,
  displayOptions: {
    // label prefix
    velocityType: "Global Wind",

    // leaflet control position
    position: "bottomleft",

    // no data at cursor
    emptyString: "No velocity data",

    // see explanation below
    angleConvention: "bearingCW",

    // display cardinal direction alongside degrees
    showCardinal: true,

    // one of: ['ms', 'k/h', 'mph', 'kt']
    speedUnit: "kt",

    // direction label prefix
    directionString: "Direction",

    // speed label prefix
    speedString: "Speed",
  },
  data: jsonData ,// see demo/*.json, or wind-js-server for example data service

  // OPTIONAL
  minVelocity: 0, // used to align color scale
  maxVelocity: 10, // used to align color scale
  velocityScale: 0.005, // modifier for particle animations, arbitrarily defaults to 0.005
  //colorScale: [], // define your own array of hex/rgb colors
  onAdd: null, // callback function
  onRemove: null, // callback function
  opacity: 0.97, // layer opacity, default 0.97

  // optional pane to add the layer, will be created if doesn't exist
  // leaflet v1+ only (falls back to overlayPane for < v1)
  paneName: "overlayPane",
}).addTo(map);

L.control.layers({},{"Vent": velocityLayer}).addTo(map);

 ///******************************************** */



}
    render() {
      return (
        <div id="map" >
           TEST
        </div>
      );
    }
  }
  
  export default Carto;