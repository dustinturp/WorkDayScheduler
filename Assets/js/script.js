$(document).ready(function(){
    console.log("ready");


//query selectors 
const dateTimeEl = document.querySelector("#currentDay");
let textBoxPlacement = document.getElementById("container");
// console


//show current day
// resource https://www.w3schools.com/jsref/met_win_setinterval.asp
let todayDateInfo = new Date()
console.log(todayDateInfo);
console.log(typeof(todayDateInfo)); //showing object

const displayTime = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  let date = d.toLocaleDateString();

  document.getElementById("currentDay").innerHTML = date + "    " + t;
}
//create text box from 9-5

const createTimeStripBoxEl = function(i) {
    let timeStripContainer = document.createElement("div");
    let textBox = document.createElement("textarea");
    let saveButtonEl = document.createElement("div");
    let timeBox = document.createElement("div");
    let timeText = document.createElement("h3");
    let saveIcon = document.createElement("img")
    currentHour = dayjs().hour()

    //time strip container //add counter
    timeStripContainer.classList.add("row", "time-block");
    textBoxPlacement.appendChild(timeStripContainer);

    //timeBox
    timeBox.classList.add("hour","col-1")
    // set to time from 9am to 5pm.
    timeStripContainer.appendChild(timeBox);
    //time number
    timeText.classList.add("hour", "text-align-center")
    timeText.textContent = i;
    timeBox.appendChild(timeText);

    //text box
    textBox.classList.add("textarea","col-10");//.setAttribute("col-4" )
    textBox.setAttribute("id", "txtBox"+i)
    console.log(i);
    if (currentHour > i) {
        //set text box to attribute past
        textBox.classList.add("past")
    }
    if (currentHour === i) {
        textBox.classList.add("present")
    }
    if (currentHour < i) {
        textBox.classList.add("future")
    }
    timeStripContainer.appendChild(textBox);


    //save button
    saveButtonEl.classList.add("saveBtn","col-1")
    saveButtonEl.setAttribute("id", "svBtn"+i )
    $(saveButtonEl).click(function(){
        // console.log("hello");
        //loop id counter
    })
    timeStripContainer.appendChild(saveButtonEl);
    //save button icon
    saveIcon.classList.add("saveBtn");
    saveIcon.setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/save--v1.png");
    saveButtonEl.appendChild(saveIcon);

    //div wrapper 3 els
}   

//for loop call create time strip
const createDay = function() {
    for(let i = 9; i < 18; i++) {
        createTimeStripBoxEl(i);
    }

}
createDay();
// updateTimeStrips();

//use css past present future to update style based on time
// const updateTimeStrips = function() {
//     currentHour = dayjs().hour()
//     // setHour = 
//     if (currentHour < i) {
//         //set text box to attribute past
//         textBox.classList.add("past")
//     }
//     if (currentHour === i) {
//         textBox.classList.add("present")
//     }
//     if (currentHour > i) {
//         textBox.classList.add("future")
//     }
    
// }

 console.log(dayjs().hour())
});