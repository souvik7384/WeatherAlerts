// =================================
// FILTER ALERTS
// =================================

function filterAlerts(type, button) {

    const alerts =
        document.querySelectorAll(".alert-item");

    const buttons =
        document.querySelectorAll(".filter");

    // Remove active from all buttons
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Activate selected button
    button.classList.add("active");

    let visibleCount = 0;

    alerts.forEach(alert => {

        const alertType =
            alert.getAttribute("data-type");

        if (type === "all" || alertType === type) {

            alert.style.display = "flex";

            visibleCount++;

        } else {

            alert.style.display = "none";

        }

    });

    document.getElementById("alertCount")
        .textContent =
        visibleCount + " alerts";
}


// =================================
// SHOW DETAILS
// =================================

function showDetails(title) {

    const modal =
        document.getElementById("detailsModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");


    modalTitle.textContent = title;

    modalDescription.textContent =
        "This weather alert has been issued based on current and forecast weather conditions. Please monitor updates and follow local safety guidance.";

    modal.style.display = "flex";
}


// =================================
// CLOSE MODAL
// =================================

function closeDetails() {

    document.getElementById("detailsModal")
        .style.display = "none";
}


// =================================
// MARK ALL READ
// =================================

function markAllRead() {

    const alerts =
        document.querySelectorAll(".alert-item");

    alerts.forEach(alert => {

        alert.style.opacity = "0.6";

    });

    alert("All alerts marked as read.");
}


// =================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("detailsModal");

    if (event.target === modal) {
        closeDetails();
    }

});