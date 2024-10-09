const ipnProfiles = [
    { "Profile": "IPN 80", "Height_h_mm": 80, "Width_b_mm": 42, "Thickness_s_mm": 3.9, "Thickness_t_mm": 5.9, "Weight_per_meter_kg_m": 5.94 },
    { "Profile": "IPN 100", "Height_h_mm": 100, "Width_b_mm": 50, "Thickness_s_mm": 4.5, "Thickness_t_mm": 6.8, "Weight_per_meter_kg_m": 8.34 },
    { "Profile": "IPN 120", "Height_h_mm": 120, "Width_b_mm": 58, "Thickness_s_mm": 5.1, "Thickness_t_mm": 7.7, "Weight_per_meter_kg_m": 11.10 },
    { "Profile": "IPN 140", "Height_h_mm": 140, "Width_b_mm": 66, "Thickness_s_mm": 5.7, "Thickness_t_mm": 8.6, "Weight_per_meter_kg_m": 14.30 },
    { "Profile": "IPN 180", "Height_h_mm": 180, "Width_b_mm": 82, "Thickness_s_mm": 6.9, "Thickness_t_mm": 10.4, "Weight_per_meter_kg_m": 21.90 },
    { "Profile": "IPN 200", "Height_h_mm": 200, "Width_b_mm": 90, "Thickness_s_mm": 7.5, "Thickness_t_mm": 11.3, "Weight_per_meter_kg_m": 26.20 },
    { "Profile": "IPN 220", "Height_h_mm": 220, "Width_b_mm": 98, "Thickness_s_mm": 8.1, "Thickness_t_mm": 12.2, "Weight_per_meter_kg_m": 31.10 },
    { "Profile": "IPN 240", "Height_h_mm": 240, "Width_b_mm": 106, "Thickness_s_mm": 8.7, "Thickness_t_mm": 13.1, "Weight_per_meter_kg_m": 36.20 },
    { "Profile": "IPN 260", "Height_h_mm": 260, "Width_b_mm": 113, "Thickness_s_mm": 9.4, "Thickness_t_mm": 14.1, "Weight_per_meter_kg_m": 41.90 },
    { "Profile": "IPN 280", "Height_h_mm": 280, "Width_b_mm": 119, "Thickness_s_mm": 10.1, "Thickness_t_mm": 15.2, "Weight_per_meter_kg_m": 47.90 },
    { "Profile": "IPN 300", "Height_h_mm": 300, "Width_b_mm": 125, "Thickness_s_mm": 10.8, "Thickness_t_mm": 16.2, "Weight_per_meter_kg_m": 54.20 },
    { "Profile": "IPN 320", "Height_h_mm": 320, "Width_b_mm": 131, "Thickness_s_mm": 11.5, "Thickness_t_mm": 17.3, "Weight_per_meter_kg_m": 61.00 },
    { "Profile": "IPN 340", "Height_h_mm": 340, "Width_b_mm": 137, "Thickness_s_mm": 12.2, "Thickness_t_mm": 18.3, "Weight_per_meter_kg_m": 68.00 },
    { "Profile": "IPN 360", "Height_h_mm": 360, "Width_b_mm": 143, "Thickness_s_mm": 13, "Thickness_t_mm": 19.5, "Weight_per_meter_kg_m": 76.10 },
    { "Profile": "IPN 380", "Height_h_mm": 380, "Width_b_mm": 149, "Thickness_s_mm": 13.7, "Thickness_t_mm": 20.5, "Weight_per_meter_kg_m": 84.00 },
    { "Profile": "IPN 400", "Height_h_mm": 400, "Width_b_mm": 155, "Thickness_s_mm": 14.4, "Thickness_t_mm": 21.6, "Weight_per_meter_kg_m": 92.40 },
    { "Profile": "IPN 450", "Height_h_mm": 450, "Width_b_mm": 170, "Thickness_s_mm": 16.2, "Thickness_t_mm": 24.3, "Weight_per_meter_kg_m": 115.00 },
    { "Profile": "IPN 500", "Height_h_mm": 500, "Width_b_mm": 185, "Thickness_s_mm": 18, "Thickness_t_mm": 27, "Weight_per_meter_kg_m": 141.00 },
    { "Profile": "IPN 550", "Height_h_mm": 550, "Width_b_mm": 200, "Thickness_s_mm": 19, "Thickness_t_mm": 30, "Weight_per_meter_kg_m": 166.00 }
];

function populateProfiles() {
    const ipnProfilesSelect = document.getElementById("ipnProfiles");
    ipnProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.Profile;
        option.textContent = profile.Profile;
        ipnProfilesSelect.appendChild(option);
    });
}

function calculateWeight() {
    const selectedProfile = document.getElementById("ipnProfiles").value;
    const length = parseFloat(document.getElementById("length").value);
    const profile = ipnProfiles.find(p => p.Profile === selectedProfile);
    
    if (profile && !isNaN(length) && length > 0) {
        const weightPerMeter = profile.Weight_per_meter_kg_m; 
        const totalWeight = weightPerMeter * length / 1000; // Calculate total weight

        // Prepare data for display
        const profileData = `
            <strong>Profile:</strong> ${profile.Profile} <br>
            <strong>Height (mm):</strong> ${profile.Height_h_mm} <br>
            <strong>Width (mm):</strong> ${profile.Width_b_mm} <br>
            <strong>Thickness s (mm):</strong> ${profile.Thickness_s_mm} <br>
            <strong>Thickness t (mm):</strong> ${profile.Thickness_t_mm} <br>
            <strong>Length (m):</strong> ${length} <br>
            <strong>Weight per meter (kg):</strong> ${weightPerMeter} <br>
            <strong>Total weight (kg):</strong> ${totalWeight.toFixed(2)}
        `;

        document.getElementById("result").innerHTML = profileData;
    } else {
        document.getElementById("result").innerText = 'Please select a valid profile and enter a valid length.';
    }
}

// Call the function to populate the dropdown on page load
populateProfiles();
