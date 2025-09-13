
function onLoginBtnClick() {
    console.log("Login cliked");
}

function onDeleteBtnClick() {
    console.log("DELETE CALLED")

    // Variables
    let v1 = "test";
    v1 = 2;
    v1 = 23.1243
    v1 = false;

    // JS objects
    const emp1 = {
        "name": "John",
        "id": 1234,
        "height": 6,
        "contactNumber": 999999999,
        "address": "main road, Delhi"
    }

    // Access the property of JS Object
    console.log(emp1.name); // John

    // Assigning value to property of JS OBject
    emp1.name = "Jane";

    // Access the property of JS Object
    console.log(emp1.name); // Jane



    // const myName = "Sandy";
    // myName = "TestName";
    // console.log(myName);


    // What if you do a spelling mistae while assigning and accessing a property of JS Object

    console.log(emp1.Name);

    emp1.Name = "Mayur";


    // Nested Objects
    // Objects within Objects
    const restaurants = {
        "areawise": {
            "aundh": ["Roso", "Red Chilli", "Subway"],
            "shivajinagar": ["WorldOfVeg", "Sagar"],
            "koregaonParkk": ["88", "Clubs"]
        },
        "ratingsWise": {
            "topRated": ["Carlton", "Hyatt"],
            "4Star": ["ChinaTown", "AsianC"]
        }
    }


    console.log("Ends");

}


function add() {
    console.log(2+3);
}

add();

function showTopRatedRes() {
    // API call to get the info from server
    const restaurants = {
        "areawise": {
            "aundh": ["Roso", "Red Chilli", "Subway"],
            "shivajinagar": ["WorldOfVeg", "Sagar"],
            "koregaonParkk": ["88", "Clubs"]
        },
        "ratingsWise": {
            "topRated": ["Carlton", "Hyatt"],
            "4Star": ["ChinaTown", "AsianC"]
        }
    }

    console.log(restaurants.ratingsWise.topRated);

    // Hide the existing buttons
    // Take control of HTML elements
    const deleteBtn = document.getElementById('dltBtn');
    deleteBtn.classList.add("hidden")

    // Display on my HTML Document
    let resName = document.createElement("p");
    // <p>Res name</p>
    resName.innerHTML = restaurants.ratingsWise.topRated;

    document.body.appendChild(resName);


}