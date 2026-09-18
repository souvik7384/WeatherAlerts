// ======================================
// LOAD SAVED LOCATIONS
// ======================================

let savedLocations =
    JSON.parse(
        localStorage.getItem("weatherLocations")
    ) || [];


updateLocationCount();


// ======================================
// ADD LOCATION
// ======================================

function addLocation() {

    const input =
        document.getElementById("cityInput");

    const city =
        input.value.trim();

    const message =
        document.getElementById("searchMessage");


    if (city === "") {

        message.textContent =
            "Please enter a city name.";

        message.style.color = "#dc2626";

        return;
    }


    // Check duplicate

    const exists =
        savedLocations.some(
            location =>
                location.toLowerCase() ===
                city.toLowerCase()
        );


    if (exists) {

        message.textContent =
            "This location is already saved.";

        message.style.color = "#dc2626";

        return;
    }


    // Add location

    savedLocations.push(city);


    localStorage.setItem(
        "weatherLocations",
        JSON.stringify(savedLocations)
    );


    message.textContent =
        `${city} has been added successfully.`;

    message.style.color = "#16a34a";


    input.value = "";

    updateLocationCount();

    console.log(
        "Location added:",
        city
    );
}


// ======================================
// REMOVE LOCATION
// ======================================

function removeLocation(button) {

    const card =
        button.closest(".location-card");

    const city =
        card.getAttribute("data-city");


    // Remove from saved array

    savedLocations =
        savedLocations.filter(
            location =>
                location.toLowerCase() !==
                city.toLowerCase()
        );


    localStorage.setItem(
        "weatherLocations",
        JSON.stringify(savedLocations)
    );


    // Remove UI

    card.remove();


    updateLocationCount();
}


// ======================================
// FAVORITE
// ======================================

function toggleFavorite(button) {

    button.classList.toggle("inactive");

    if (
        button.classList.contains("inactive")
    ) {

        button.textContent = "☆";

    } else {

        button.textContent = "★";

    }
}


// ======================================
// UPDATE LOCATION COUNT
// ======================================

function updateLocationCount() {

    const cards =
        document.querySelectorAll(
            ".location-card"
        );

    document.getElementById(
        "locationCount"
    ).textContent =
        `${cards.length} Locations`;
}