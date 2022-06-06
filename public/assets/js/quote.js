// variable of building types //

let building = document.querySelector("#building");
let residential = document.querySelector("#residentialForm");
let commercial = document.querySelector("#commercialForm");
let corporate = document.querySelector("#corporateForm");
let hybrid = document.querySelector("#hybridForm");
let elevator = document.getElementsByClassName("elevator")[0];

// Show fields depending on building type //
building.addEventListener("change", function () {
    // if on select value 0=
    if (building.value == 0) {
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on residential select value 1
    } else if (building.value == 1) {
        residential.style.display = "block";
        commercial.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on commercial select value 2
    } else if (building.value == 2) {
        commercial.style.display = "block";
        residential.style.display = "none";
        corporate.style.display = "none";
        hybrid.style.display = "none";
        // if on corporate select value 3
    } else if (building.value == 3) {
        corporate.style.display = "block";
        commercial.style.display = "none";
        residential.style.display = "none";
        hybrid.style.display = "none";
        // if on hybrid select value 4//
    } else if (building.value == 4) {
        hybrid.style.display = "block";
        residential.style.display = "none";
        commercial.style.display = "none";
        corporate.style.display = "none";
    }
    // for loop uncheck radio button fields and elevator to 0//
    for (var b = 0; b < buttons.length; b++) {
        buttons[b].checked = false;
        elevator.value = 0;
        prices.value = "$ " + 0;
        installation.value = "$ " + 0;
        total.value = "$ " + 0;
    }
});


// for residential // 

let resFields = document.getElementsByClassName("resFields");
let resArray = Array.from(resFields);

for (var r = 0; r < resArray.length; r++) {
    resArray[r].addEventListener("blur", function () {
        // built variables
        let apartments = document.getElementsByName("residential[apartments]")[0];
        let floorsRes = document.getElementsByName("residential[floors]")[0];
        // number of apartment divided by number of floors to obtain average doors per floor
        let avgDoors = parseInt(apartments.value) / parseInt(floorsRes.value);
        // the average doors is divided by 6 to obtain the number of elevators 
        let numElevators = avgDoors / 6;
        // number of floors is divided by 20 to obtain the number of coloums
        let numColumns = Math.ceil(floorsRes.value / 20);
        //  if statement to whether the value of the array is greater than zero/have any entry
        if (apartments.value.length > 0 && floorsRes.value.length > 0) {

            return elevator.value = Math.ceil(numElevators) * numColumns;

        }
    })
}

// for commercial// 
let comField = document.getElementsByClassName("comField");
let comArray = Array.from(comField);
// built variables
//for loop
for (var c = 0; c < comArray.length; c++) {
    comArray[c].addEventListener("blur", function () {
        //variable
        let elevatorNeeded = document.getElementsByName("commercial[cages]")[0];
        //number of elevator require is equql to number of elevator needed
        if (elevatorNeeded.value.length > 0) {
            return elevator.value = elevatorNeeded.value;
        }
    });
}

// for corporate // 

let corpFields = document.getElementsByClassName("corporateField");
let corporateArray = Array.from(corpFields);

for (var p = 0; p < corporateArray.length; p++) {
    //function expression
    corporateArray[p].addEventListener("blur", function () {
        //the variables
        let occupants = document.getElementsByName("contact[occupants]")[0];
        let floors = document.getElementsByName("contact[floors]")[0];
        let basements = document.getElementsByName("contact[basements]")[0];
        //number of total stories is equal to number of floors plus the number of basement
        let numStories = parseInt(floors.value) + parseInt(basements.value);
        //total number of occupants is number of occupany per floors multiply by the number of stories
        let totalOccupants = occupants.value * numStories;
        //number of elevators is the number of the total occupants divided by 1000
        let numElevators = Math.ceil(totalOccupants / 1000);
        //the number of stories is divided by 20 to obtain the number of coloums
        let numColumns = Math.ceil(numStories / 20);
        //if statement with binary expression
        if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
            let elevPerCol = Math.ceil(numElevators / numColumns);
            return elevator.value = elevPerCol * numColumns;
        }
    });
}

// for hybrid // 

let hybFields = document.getElementsByClassName("hybFields");
let hybridArray = Array.from(hybFields);

for (var h = 0; h < hybridArray.length; h++) {
    //function expression
    hybridArray[h].addEventListener("blur", function () {
        //the variables
        let occupants = document.getElementsByName("contact[occupants]")[1];
        let floors = document.getElementsByName("contact[floors]")[1];
        let basements = document.getElementsByName("contact[basements]")[1];
        //number of total stories is equal to number of floors plus the number of basement
        let numStories = parseInt(floors.value) + parseInt(basements.value);
        //total number of occupants is number of occupany per floors multiply by the number of stories
        let totalOccupants = occupants.value * numStories;
        //number of elevators is the number of the total occupants divided by 1000
        let numElevators = Math.ceil(totalOccupants / 1000);
        //the number of stories is divided by 20 to obtain the number of coloums
        let numColumns = Math.ceil(numStories / 20);
        //if statement with binary expression
        if (occupants.value.length > 0 && basements.value.length > 0 && floors.value.length > 0) {
            let elevPerCol = Math.ceil(numElevators / numColumns);
            return elevator.value = elevPerCol * numColumns;
        }
    });
}

// variable for radio range
let buttons = document.getElementsByClassName("buttons");
// variable for radio range
let unitNum = document.getElementsByClassName("unitNum")[0];
let prices = document.getElementsByClassName("price")[0];
let installation = document.getElementsByClassName("installation")[0];
let total = document.getElementsByClassName("total")[0];
// unit price for different packages
let unit = [7565, 12345, 15400];
let fees = [0.10, 0.13, 0.16];

//for loop to output  results info
function packagePrice() {
    for (var i = 0; i < buttons.length; i++) {
        // if statement of range of standard or premium or excelium
        if (buttons[i].checked) {
            // display info price for one elevator
            let unitPrice = parseFloat((unit[i]) * 1);
            unitNum.value = "$ " + unitPrice.toFixed(2);
            // display info price for number of elevator chosen
            let price = parseFloat(elevator.value * unit[i]);
            prices.value = "$ " + price.toFixed(2);
            // display installation fee
            let fee = parseFloat(price * (1 + fees[i])) - price;
            installation.value = "$ " + fee.toFixed(2);
            // display total price
            let totalPrice = parseFloat(price) + parseFloat(fee);
            total.value = "$ " + totalPrice.toFixed(2);
        }

    }
}
