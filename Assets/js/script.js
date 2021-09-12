$(document).ready(function(){
    console.log("ready");


//query selectors 
const dateTimeEl = document.querySelector("#currentDay");
let textBoxPlacement = document.getElementById("container");

//load items from local storage into variable 
timeSlots = JSON.parse(localStorage.getItem("timeSlot")) || [];


//show current day
// resource https://www.w3schools.com/jsref/met_win_setinterval.asp
let todayDateInfo = new Date()
// console.log(todayDateInfo);
// console.log(typeof(todayDateInfo)); //showing object

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
    // console.log(i);
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
        let timeSlot = $('#txtBox'+i).val().trim();
        // console.log(timeSlot)
        if (timeSlot !== "" || undefined) {
            timeSlots.push("txtBox"+i + " " + timeSlot);
            // timeSlots.push(timeSlot);
            console.log(timeSlots);
            localStorage.setItem("timeSlot",JSON.stringify(timeSlots));
        } else {
            console.log("blank")
        }
    })

    timeStripContainer.appendChild(saveButtonEl);
    //save button icon
    saveIcon.classList.add("saveBtn");
    saveIcon.setAttribute("src", "https://img.icons8.com/ios-glyphs/30/000000/save--v1.png");
    saveButtonEl.appendChild(saveIcon);
} 

//save to local storage section
//load tasks
const loadSavedTimeSlots = function(){
    //load keys and link text to the page.
    console.log(timeSlots)
    for (i = 0; i < timeSlots.length; i++) { 
        //pull key from table
        let timeSlotArr = timeSlots[i].split(" ")
        let timeSlotKey = timeSlotArr[0];
        // console.log(timeSlotKey)
        let timeSlotText = timeSlotArr[1]; 
        // console.log(timeSlotText)
        $("#" + timeSlotKey).append(timeSlotText); 
        if (timeSlotText !== "" || undefined){
            console.log("not Blank")
        }
        //update page with text from matching key
    }
};

//save to local storage on save button click 
    // on click append text content of text box to TmeSlots array with id.


//for loop call create time strip
const createDay = function() {
    for(let i = 9; i < 18; i++) {
        createTimeStripBoxEl(i);
    }

}
//create 9am - 5pm time blocks
createDay();
//render timeslots on page load 
loadSavedTimeSlots();

});