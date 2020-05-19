let fifaData = require("./fifa.js");

/* import { fifaData } from './fifa.js';
console.log(fifaData); 

console.log('its working'); */
// ⚽️ M V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

function findData(element){
    return element.Year === 2014 && element.Stage === "Final";
} 
console.log(fifaData.filter(findData)[0]["Home Team Name"]);
console.log(fifaData.filter(findData)[0]["Away Team Name"]);
console.log(fifaData.filter(findData)[0]["Home Team Goals"]);
console.log(fifaData.filter(findData)[0]["Away Team Goals"]);

if(fifaData.filter(findData)[0]["Home Team Goals"] > fifaData.filter(findData)[0]["Away Team Goals"] ){
    console.log(fifaData.filter(findData)[0]["Home Team Name"]);
} else if (fifaData.filter(findData)[0]["Away Team Goals"] > fifaData.filter(findData)[0]["Home Team Goals"]){
    console.log(fifaData.filter(findData)[0]["Away Team Name"]);
} else {
    console.log("Tied");
}


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(function (element){ 
        return element.Stage === "Final"});
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(pGetFinals, data) {
    let f = pGetFinals(data);
    let years = [];
    for (let i = 0; i < f.length; i++) {
        let element = f[i];
        years.push(element["Year"]);
    }
    return years;
};
console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game.
Return the name of all winning countries in an array called `winners` */ 

function getWinners(pGetFinals, data) {
    let f = pGetFinals(data);
    let winners = [];
    for (let i = 0; i < f.length; i++) {
        let winnerName = "Tie";
        if (f[i]["Home Team Goals"] > f[i]["Away Team Goals"]) {
            winnerName = f[i]["Home Team Name"];
        } else if (f[i]["Home Team Goals"] < f[i]["Away Team Goals"]) {
            winnerName = f[i]["Away Team Name"];
        }
        winners.push(winnerName);
    }
    return winners;
};
console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cGetWinners, cGetYears) {
    let temp = [];
    for (let i = 0; i < cGetWinners(getFinals, fifaData).length; i++) {
        let country = cGetWinners(getFinals, fifaData)[i];
        let year = cGetYears(getFinals, fifaData)[i];
        temp.push("In " + year + ", " + country + " won the world cup!")
    }
    return temp;
};
console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        total += data[i]["Home Team Goals"] + data[i]["Away Team Goals"];
    }
    return (total/data.length);
};
console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
