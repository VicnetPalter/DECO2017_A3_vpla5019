//intializing constants and data that will be tracked when implemented by the user

// this is an array of arrays with each workout being its own array
const workoutData = [];

//array that contains all summary details of workout

const workoutSummaryArray = [];

// array that contains all extra details to be shown on button click

const extraDetailsArray = [];


//counter for tracking how many workouts completed
var workoutCounter = 0;


//implementation of geeks for geeks stopwatch variable initialization

//selection of html button elements
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

//initializing starting point for counters
let minute = 00;
let second = 00;
let count = 00

//event listener to start the timer
startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

//event listener to stop the timer
stopBtn.addEventListener('click', function () {
	timer = false;
});

//event listener to reset the timer putting all counters back to zero
resetBtn.addEventListener('click', function () {
	timer = false;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

//end geeks for geeks code

//hiding all content that will be revealed as the user clicks buttons and navigates website
document.getElementsByClassName('workoutPg')[0].style.display = 'none';
document.getElementsByClassName("container")[0].style.display = 'none';


//functions

//createWorkout function allows user to create a new workout from the start screen by hiding and revealing elements. 
function createWorkout() {
	document.getElementsByClassName("container")[0].style.display = '';
    document.getElementsByClassName('landingPg')[0].style.display = 'none';
	document.getElementsByClassName('workoutPg')[0].style.display = '';
	document.getElementById("plusButton").style.display = 'none';
//hiding all elements that would get redisplayed when creating a new workout
	for (let element of document.getElementsByClassName('stretchDescription')){
		element.style.display = 'none';
	}
	for (let element of document.getElementsByClassName('stretchImgs')){
	element.style.display = 'none';
	}
	workoutCounter +=1;
	document.getElementById('workoutPgTitle').innerHTML = "Workout " + workoutCounter;
	for (let element of document.getElementsByClassName('workoutContainer')){
		element.style.display = 'none';
	}





	


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
    let stretchDepth = document.getElementById('stretchDepth').value;
	if (stretchDepth == '') {
		stretchDepth = 0;
	}

//appending data collected to array withing function 
    singleWorkout.push(selectedOption.value);
	singleWorkout.push(stretchDepth)

//collecting the return value from modified stop watch function which returns as an array with 3 values.
//a try catch is implemented in case the user doesnt start the timer at all and will fill a default value
	try {
	singleWorkout.push(stopWatch())
	}
	catch(err) {
	singleWorkout.push([0,0,0])
	}
// add workout counter to the data set
	singleWorkout.push(workoutCounter);
//initialize and add a unique id and date to the data array aswell
	let uniqueId = Date.now();
	let workoutDate = new Date();
	singleWorkout.push(uniqueId);
	singleWorkout.push(workoutDate);
//and finally pushing the array(singleWorkout) to the global array workoutData for later use
	workoutData.push(singleWorkout)
	document.getElementsByClassName('workoutPg')[0].style.display = 'none';
    document.getElementsByClassName('landingPg')[0].style.display = '';
	document.getElementById("plusButton").style.display = '';
	document.getElementsByClassName('container')[0].style.display = 'none';

//resetting the timer for the next workout	
	timer = false;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
//resetting stretch depth for next workout
	document.getElementById('stretchDepth').value = null;
	document.getElementById('stretchDepth').placeholder = "Enter Depth in cm";
//resetting the stretch type to default
	document.getElementById('stretchType').value = 'Free Stretch';

//hiding some div elements

// to finish this function when the user click finish and save this will then call the workoutSummary function
	workoutSummary();


};

// with all the data now stored safely in an array all we have to do now is display it in a summary and allow the user delete objects
//and see details

//the following function workoutSummary displays the workout details 
function workoutSummary() {
//create array of each summary element
	let singleWorkoutSummary = [];
//create array that holds all extra details
 	let singleExtra = [];

//hiding the no workout default text if there is atleast 1 workout completed 
	if (workoutCounter != 0){
	document.getElementById("noWorkouts").style.display = 'none';
	}
//ensuring we dont get repeat displays if we do multiple workouts just a cheeky for loop hiding all the workoutContainers 
	if (workoutCounter > 1){
		
		for (let element of document.getElementsByClassName('workoutContainer')){
			element.style.display = 'none';

		}


	}



//for loop going through data array creating elements and displaying data

	
//create a container to place our workout data in
		const workoutContainer = document.createElement("div");
		workoutContainer.className = "workoutContainer";
		document.body.appendChild(workoutContainer);
//fill the container with html elements and fill elements with array values

//create workout label

		let workoutLabel ="Workout " +  workoutData[workoutCounter-1][3];
		singleWorkoutSummary.push(workoutLabel);

//create stretchType
		let stretchType ="Stretch Type: " + workoutData[workoutCounter-1][0];
		singleWorkoutSummary.push(stretchType);


//create stretchDepth

		let stretchDepth = "Stretch Depth: " + workoutData[workoutCounter-1][1] + "cm";
		singleWorkoutSummary.push(stretchDepth);

//create and format stretch time
		let stretchTime ="Stretch Time: " + workoutData[workoutCounter-1][2][0] + "m "+ workoutData[workoutCounter-1][2][1] + "s "  + workoutData[workoutCounter-1][2][2] + "ms";
		singleWorkoutSummary.push(stretchTime);

//create and hide title
		let detailsTitle = "Details of Your Workout";
		singleExtra.push(detailsTitle);

//create  unique id
		let uniqueId ="unique ID: " + workoutData[workoutCounter-1][4];
		singleExtra.push(uniqueId);

//create  date
		let workoutDate ="Date: " + workoutData[workoutCounter-1][5];
		singleExtra.push(workoutDate);

//create  button to close pop up
		let closeDetail = "X"
		singleWorkoutSummary.push(closeDetail);

//create button to trigger a pop up of more detailed summary of workout
		let moreDetail = "Details"
		singleWorkoutSummary.push(moreDetail);

//create button that deletes element from array
		let deleteButton = 'Delete Workout';
		singleWorkoutSummary.push(deleteButton);


		extraDetailsArray.push(singleExtra)
		workoutSummaryArray.push(singleWorkoutSummary);


		for (let element = 0; element < workoutSummaryArray.length; element ++) {
			console.log(document.getElementById('toggleDetail'))
		if (workoutSummaryArray[element] == undefined){
			console.log('error test')
			continue;
		}
			for (i of workoutSummaryArray[element]) {
			if (i == 'X'){
				let value = document.createElement('button')
				value.className = "X"
				value.innerText = "X";
				workoutContainer.appendChild(value);
				value.style.display = 'none';
				value.onclick = function () {
				for (x of document.getElementsByClassName("X")){
					x.style.display = 'none';
					}
					hideDetails();
				}


			}
			else if ( i == "Details"){
				let value = document.createElement("button");
				value.innerText = "Details";
				workoutContainer.appendChild(value);
				value.onclick = function () {
					for (x of document.getElementsByClassName("X")){
					x.style.display = '';
					}
					showDetails();
					
				}
			}
			else if ( i == "Delete Workout"){
				let value = document.createElement("button");
				value.innerText = "DeleteWorkout";
				workoutContainer.appendChild(value);
				console.log(workoutSummaryArray)
			
				value.onclick = function () {
					delete workoutSummaryArray[element];
					workoutSummaryArray.push('');
					console.log(workoutSummaryArray)
					

					
				}

			}

			
			else {
			console.log(workoutSummaryArray)
			let value = document.createElement('p')
			value.innerText = i ;
			value.Id = i;
			workoutContainer.appendChild(value);
			}
			}
		}



	}


function showDetails (){
	const workoutContainer = document.createElement("div");
	workoutContainer.className = "workoutContainer";
	document.body.appendChild(workoutContainer);
	for (element of extraDetailsArray){
		for(i of element){
			let value = document.createElement("p");
			value.innerText = i;
			workoutContainer.appendChild(value);
		}
	}
}
function hideDetails (){
	console.log('nanaan')
	delete extraDetailsArray[0];
	
}


//implementation of geeks for geeks stopwatch
	function stopWatch() {
		let minString = minute;
		let secString = second;
		let countString = count;
	//logic for increasing counters for 
		if (timer) {
			count++;

			if (count == 100) {
				second++;
				count = 0;
			}

			if (second == 60) {
				minute++;
				second = 0;
			}

	//ensuring there is 0 infront of counters when they are less then 10 for aesthetic purpose
			if (minute < 10) {
				minString = "0" + minString;
			}

			if (second < 10) {
				secString = "0" + secString;
			}

			if (count < 10) {
				countString = "0" + countString;
			}
//setting final counter elements to correlate with if statements.
			document.getElementById('min').innerHTML = minString;
			document.getElementById('sec').innerHTML = secString;
			document.getElementById('count').innerHTML = countString;
			setTimeout(stopWatch, 10);
		}
//returning the 3 time values as an array for access outside the function
	return [minString, secString, countString];

	}
//end of implementation of geeks for geeks stop watch

// function for hiding and showing details
function toggleFunction() {
	var x = document.getElementById("toggleDetail");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }
//function for displaying stretch info when selecting stretch from drop down.
function stretchDescription() {
//tracking what drop down is selected
	let stretchType = document.getElementById('stretchType');
    let stretchIndex = stretchType.selectedIndex;
    let selectedOption = stretchType.options[stretchIndex];
//if statements showing different stretch descriptions based on what is selected
//tricep
	if (selectedOption.value == 'Tricep'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('tricepDescription').style.display = '';
		document.getElementById('tricepImg').style.display = 'inline';
	}

//rear delt	

	if (selectedOption.value == 'Rear Delt'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('rearDeltDescription').style.display = '';
		document.getElementById('rearDeltImg').style.display = 'inline';
	}

//front delt	
	if (selectedOption.value == 'Front Delt'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('frontDeltDescription').style.display = '';
		document.getElementById('frontDeltImg').style.display = 'inline';

	}

//bicep	

	if (selectedOption.value == 'Bicep'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('bicepDescription').style.display = '';
		document.getElementById('bicepImg').style.display = 'inline';
	}
		
//quad	

	if (selectedOption.value == 'Quad'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('quadDescription').style.display = '';
		document.getElementById('quadImg').style.display = 'inline';

	}
//hamstring	

	if (selectedOption.value == 'Hamstring'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('hamstringDescription').style.display = '';
		document.getElementById('hamstringImg').style.display = 'inline';

	}
//calf	

	if (selectedOption.value == 'Calf'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('calfDescription').style.display = '';
		document.getElementById('calfImg').style.display = 'inline';

	}
//	lats

	if (selectedOption.value == 'Lats'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('latsDescription').style.display = '';
		document.getElementById('latsImg').style.display = 'inline';

	}
//	traps

	if (selectedOption.value == 'Traps'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('trapsDescription').style.display = '';
		document.getElementById('trapsImg').style.display = 'inline';

	}
//	rhomboid

	if (selectedOption.value == 'Rhomboids'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('rhomboidsDescription').style.display = '';
		document.getElementById('rhomboidsImg').style.display = 'inline';

	}
//	hip flexor

	if (selectedOption.value == 'Hip Flexor'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('hipFlexorDescription').style.display = '';
		document.getElementById('hipFlexorImg').style.display = 'inline';

	}
//	adductor

	if (selectedOption.value == 'Adductors'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('adductorDescription').style.display = '';
		document.getElementById('adductorImg').style.display = 'inline';

	}
//	tensor

	if (selectedOption.value == 'Tensors'){
		for (let element of document.getElementsByClassName('stretchDescription')){
			element.style.display = 'none';
		}
		for (let element of document.getElementsByClassName('stretchImgs')){
			element.style.display = 'none';
			}
		document.getElementById('tensorDescription').style.display = '';
		document.getElementById('tensorImg').style.display = 'inline';
		
	}
}




