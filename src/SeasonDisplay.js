import React from "react";

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
  const season = getSeason(props.lat, new Date().getMonth());
  {
    /* If the season is 'winter say "Burr, it is chilly", otherwise say  "Lets hit the beach" */
  }
  const text =
    season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
  return <h1>{text}</h1>;
};

export default SeasonDisplay;
