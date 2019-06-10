import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  render() {
    // this will get the user's current location (no import or install needed, it is built into most browsers)
    window.navigator.geolocation.getCurrentPosition(
      // The success callback function (gets called we are successful in finding the user's current position). Take the position as an argument and then console.log() the position
      position => console.log(position),
      // the failure callback (gets called we fail to find the user's current position)
      err => console.log(err)
    );
    return <div>Latitude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
