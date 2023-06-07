//intializing constants and data that will be tracked when implemented by the user
// this is an array of arrays with each workout being its own array
const workoutData = [];
//counter for tracking how many workouts completed
var counter = 0;

//hiding all content that will be revealed as the user clicks buttons and navigates website

//functions


//createWorkout function allows user to create a new workout from the start screen by hiding and revealing elements. 
function createWorkout() {
    document.getElementById('landingPg').style.display = 'none';

};
//the saveData function selects all the data that the user enters through drop down menus, inputs etc
//and saves all the data to the workoutData array as its own array. This only happens when the user clicks the Finish workout
//and save button.
function saveData () {
//creating an empty array to append data from a single workout. 
    let singleWorkout = [];
//accessing the selected drop down through its index of options and accessing its value
    let stretchType = document.getElementById('stretchType');
    let stretchIndex = stretchType.selectedIndex;
    let selectedOption = stretchType.options[stretchIndex];
//accessing the Stretch depth input
    let stretchDepth = document.getElementById('stretchDepth')
//

    workoutData.push(selectedOption.value);
    console.log(workoutData);

};





