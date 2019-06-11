import React from "react";

// import the css file into this component
// Webpack will take the stuff from this CSS file and apply it to index.html when the component gets rendered there
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake"
  }
};

// a method used to find the season using latitude and month
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // this is a ternary expression
    // If the lat is greater than 0 (?), return 'summer', otherwise(:) return 'winter' (don't forget the return statement)
    return lat > 0 ? "summer" : "winter";
  } else {
    // this is just for if the month is outisde the range of 2-9
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  // gives you either 'winter' or 'summer
  const season = getSeason(props.lat, new Date().getMonth());
  // uses what you got from season variable to get info from either 'summer' or 'winter' object in seasonConfig
  // we take out the fields we need (text & iconName) by destructuring with const { text, iconName}
  const { text, iconName } = seasonConfig[season]; //{ text, iconName}

  return (
    // It's good practice to give the root div a className similar to the component's name
    <div className={`season-display ${season}`}>
      {/* using backticks b/c we want to add the value of const icon and the "icon class" and assign it to i className= */}
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
