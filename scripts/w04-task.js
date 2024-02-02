/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let prof = {
    name: "Jay Jorgensen",
    photo: "images/profile.png",
    favoriteFoods: ["Broccoli","Potatoes","Strawberries"],
    hobbies: ["Baseball","Golf","Ice Fishing"],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
prof.placesLived.push(
    {
        place: "Lehi, UT",
        length: "2 years"
    }
);

prof.placesLived.push(
    {
        place: "Pleasant Grove, UT",
        length: "2 years"
    }
);

prof.placesLived.push(
    {
        place: "Montevideo, UY",
        length: "2 years"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = prof.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("src", prof.photo);

/* Favorite Foods List*/
prof.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.getElementById("favorite-foods").appendChild(listItem);
});

/* Hobbies List */
prof.hobbies.forEach(hobby => {
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    document.getElementById("hobbies").appendChild(listItem);
});


/* Places Lived DataList */
prof.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    let listItem = document.createElement("li");

    document.getElementById("places-lived").append(dt);
    document.getElementById("places-lived").append(dd);
});

