import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  // special function specific to the javscript language itself, not React
  // it is the first function called when this class is created, so it's a great place to initialze our component's state (since w need to initialize state when the component is first created)
  // constructor is called with the props object
  constructor(props) {
    // when we define a constructor() function, we are overriding the constructor() function from the class we extend from (React.Component). But we still want the setup code from React.Component's constructor() function to get called so we use the "super" keyword.
    // "super" is a reference to the parent's constructor function
    super(props);

    // initialize our state object. It will eventually contain some data
    // We can use our state object to initialize fields that we plan to use in this component like the latitude (or lat).
    // Since we expect lat to be a number eventually, we will set it to null for now
    // Now we can access the state and the data inside it in this component
    // This is the ONLY time we should directly assign the state with this.state. DO NOT do this anywhere else! You need to use setState() if you want to change the state
    this.state = { lat: null };

    // this will get the user's current location (no import or install needed, it is built into most browsers)
    window.navigator.geolocation.getCurrentPosition(
      // The success callback function (gets called we are successful in finding the user's current position). Take the position as an argument and then console.log() the position
      position => {
        // We take the latitude from "position"'s "coords" field and use that to change the state in "this.state" If you check your console you will see that latitude is in coords
        // setState comes from React.Component that we extend from and it is used to update the state
        this.setState({ lat: position.coords.latitude });
      },
      // the failure callback (gets called we fail to find the user's current position)
      err => console.log(err)
    );
  }

  // special function required by React
  // You should not put function calls that will take some time, or initialize some work/request in the render() because render() will re-run many times (when the state is changed)
  render() {
    // We access the latitude from the state with this.state.lat
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
