// ========================================
// LOAD SETTINGS
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const saved =
        JSON.parse(
            localStorage.getItem("weatherGuardSettings")
        );

    if (saved) {

        document.getElementById("temperatureUnit").value =
            saved.temperatureUnit || "celsius";

        document.getElementById("windUnit").value =
            saved.windUnit || "kmh";

        document.getElementById("defaultLocation").value =
            saved.defaultLocation || "Kolkata";

        document.getElementById("highTemp").value =
            saved.highTemp || 40;

        document.getElementById("rainThreshold").value =
            saved.rainThreshold || 70;

        document.getElementById("windThreshold").value =
            saved.windThreshold || 50;

        document.getElementById("uvThreshold").value =
            saved.uvThreshold || 8;

        document.getElementById("weatherAlerts").checked =
            saved.weatherAlerts ?? true;

        document.getElementById("rainAlerts").checked =
            saved.rainAlerts ?? true;

        document.getElementById("temperatureAlerts").checked =
            saved.temperatureAlerts ?? true;

        document.getElementById("dailyForecast").checked =
            saved.dailyForecast ?? false;

        applyTheme(saved.theme || "light");
    }

});


// ========================================
// SAVE SETTINGS
// ========================================

function saveSettings() {

    const selectedTheme =
        document.querySelector(
            'input[name="theme"]:checked'
        ).value;


    const settings = {

        temperatureUnit:
            document.getElementById(
                "temperatureUnit"
            ).value,

        windUnit:
            document.getElementById(
                "windUnit"
            ).value,

        defaultLocation:
            document.getElementById(
                "defaultLocation"
            ).value,

        weatherAlerts:
            document.getElementById(
                "weatherAlerts"
            ).checked,

        rainAlerts:
            document.getElementById(
                "rainAlerts"
            ).checked,

        temperatureAlerts:
            document.getElementById(
                "temperatureAlerts"
            ).checked,

        dailyForecast:
            document.getElementById(
                "dailyForecast"
            ).checked,

        highTemp:
            document.getElementById(
                "highTemp"
            ).value,

        rainThreshold:
            document.getElementById(
                "rainThreshold"
            ).value,

        windThreshold:
            document.getElementById(
                "windThreshold"
            ).value,

        uvThreshold:
            document.getElementById(
                "uvThreshold"
            ).value,

        theme: selectedTheme

    };


    localStorage.setItem(
        "weatherGuardSettings",
        JSON.stringify(settings)
    );


    applyTheme(selectedTheme);


    alert(
        "✓ Settings saved successfully!"
    );
}


// ========================================
// RESET
// ========================================

function resetSettings() {

    const confirmReset =
        confirm(
            "Reset all settings to default?"
        );

    if (!confirmReset) {
        return;
    }


    localStorage.removeItem(
        "weatherGuardSettings"
    );


    location.reload();
}


// ========================================
// EDIT PROFILE
// ========================================

function editProfile() {

    const name =
        prompt(
            "Enter your name:"
        );


    if (
        name !== null &&
        name.trim() !== ""
    ) {

        document.getElementById(
            "profileName"
        ).textContent =
            name.trim();

        document.getElementById(
            "nameInput"
        ).value =
            name.trim();
    }
}


// ========================================
// THEME
// ========================================

const themeOptions =
    document.querySelectorAll(
        'input[name="theme"]'
    );


themeOptions.forEach(option => {

    option.addEventListener(
        "change",
        function () {

            document
                .querySelectorAll(".theme-option")
                .forEach(item => {

                    item.classList.remove(
                        "selected"
                    );

                });


            this.closest(
                ".theme-option"
            ).classList.add(
                "selected"
            );


            applyTheme(this.value);

        }
    );

});


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark"
        );

    } else {

        document.body.classList.remove(
            "dark"
        );

    }
}


// ========================================
// LOGOUT
// ========================================

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to log out?"
        );

    if (confirmLogout) {

        alert(
            "You have been logged out."
        );

        // Later connect this to your
        // Java/Spring Boot authentication.

        window.location.href =
            "login.html";
    }
}