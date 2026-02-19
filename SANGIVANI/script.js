function showSection(type) {
    const output = document.getElementById("output-section");

    if (type === "hospitals") {
        output.innerHTML = "<h3>List of Partner Hospitals</h3><p>Here you will see hospitals that accept the SANGIVANI card.</p>";
    }
    else if (type === "reports") {
        output.innerHTML = "<h3>Your Medical Reports</h3><p>Access and upload your reports here.</p>";
    }
    else if (type === "chat") {
        output.innerHTML = "<h3>Live Chat with Doctors</h3><p>Start a live consultation in case of emergency.</p>";
    }
    else if (type === "prescriptions") {
        output.innerHTML = "<h3>Your Prescriptions</h3><p>View prescriptions provided by doctors.</p>";
    }
}
