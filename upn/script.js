const steelSections = {
    "UPN": [] // Adding UPN as a key
};

const upnProfiles = [
    {
        "Profile": "UPN 50 x 25",
        "Height_h_mm": 50,
        "Width_b_mm": 25,
        "Thickness_s_mm": 5,
        "Thickness_t_mm": 6,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 3.86,
        "Total_weight_kg": 3.86
    },
    {
        "Profile": "UPN 50",
        "Height_h_mm": 50,
        "Width_b_mm": 38,
        "Thickness_s_mm": 5,
        "Thickness_t_mm": 7,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 5.59,
        "Total_weight_kg": 5.59
    },
    {
        "Profile": "UPN 60",
        "Height_h_mm": 60,
        "Width_b_mm": 30,
        "Thickness_s_mm": 6,
        "Thickness_t_mm": 6,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 5.07,
        "Total_weight_kg": 5.07
    },
    {
        "Profile": "UPN 65",
        "Height_h_mm": 65,
        "Width_b_mm": 42,
        "Thickness_s_mm": 5.5,
        "Thickness_t_mm": 7.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 7.09,
        "Total_weight_kg": 7.09
    },
    {
        "Profile": "UPN 80",
        "Height_h_mm": 80,
        "Width_b_mm": 45,
        "Thickness_s_mm": 6,
        "Thickness_t_mm": 8,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 8.64,
        "Total_weight_kg": 8.64
    },
    {
        "Profile": "UPN 100",
        "Height_h_mm": 100,
        "Width_b_mm": 50,
        "Thickness_s_mm": 6,
        "Thickness_t_mm": 8.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 10.60,
        "Total_weight_kg": 10.60
    },
    {
        "Profile": "UPN 140",
        "Height_h_mm": 140,
        "Width_b_mm": 60,
        "Thickness_s_mm": 7,
        "Thickness_t_mm": 10,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 16.00,
        "Total_weight_kg": 16.00
    },
    {
        "Profile": "UPN 160",
        "Height_h_mm": 160,
        "Width_b_mm": 65,
        "Thickness_s_mm": 7.5,
        "Thickness_t_mm": 10.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 18.80,
        "Total_weight_kg": 18.80
    },
    {
        "Profile": "UPN 180",
        "Height_h_mm": 180,
        "Width_b_mm": 70,
        "Thickness_s_mm": 8,
        "Thickness_t_mm": 11,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 22.00,
        "Total_weight_kg": 22.00
    },
    {
        "Profile": "UPN 200",
        "Height_h_mm": 200,
        "Width_b_mm": 75,
        "Thickness_s_mm": 8.5,
        "Thickness_t_mm": 11.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 25.30,
        "Total_weight_kg": 25.30
    },
    {
        "Profile": "UPN 220",
        "Height_h_mm": 220,
        "Width_b_mm": 80,
        "Thickness_s_mm": 9,
        "Thickness_t_mm": 12.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 29.40,
        "Total_weight_kg": 29.40
    },
    {
        "Profile": "UPN 240",
        "Height_h_mm": 240,
        "Width_b_mm": 85,
        "Thickness_s_mm": 9.5,
        "Thickness_t_mm": 13,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 33.20,
        "Total_weight_kg": 33.20
    },
    {
        "Profile": "UPN 260",
        "Height_h_mm": 260,
        "Width_b_mm": 90,
        "Thickness_s_mm": 10,
        "Thickness_t_mm": 14,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 37.90,
        "Total_weight_kg": 37.90
    },
    {
        "Profile": "UPN 300",
        "Height_h_mm": 300,
        "Width_b_mm": 100,
        "Thickness_s_mm": 10,
        "Thickness_t_mm": 16,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 46.20,
        "Total_weight_kg": 46.20
    },
    {
        "Profile": "UPN 320",
        "Height_h_mm": 320,
        "Width_b_mm": 100,
        "Thickness_s_mm": 14,
        "Thickness_t_mm": 17.5,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 59.50,
        "Total_weight_kg": 59.50
    },
    {
        "Profile": "UPN 350",
        "Height_h_mm": 350,
        "Width_b_mm": 100,
        "Thickness_s_mm": 14,
        "Thickness_t_mm": 16,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 60.60,
        "Total_weight_kg": 60.60
    },
    {
        "Profile": "UPN 380",
        "Height_h_mm": 380,
        "Width_b_mm": 102,
        "Thickness_s_mm": 13.5,
        "Thickness_t_mm": 16,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 63.10,
        "Total_weight_kg": 63.10
    },
    {
        "Profile": "UPN 400",
        "Height_h_mm": 400,
        "Width_b_mm": 110,
        "Thickness_s_mm": 14,
        "Thickness_t_mm": 18,
        "Length_L_m": 1,
        "Weight_per_meter_kg_m": 71.80,
        "Total_weight_kg": 71.80
    }
];

// Populate the UPN profiles in the dropdown
function populateProfiles() {
    const upnProfilesSelect = document.getElementById("upnProfiles");
    upnProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.Profile;
        option.textContent = profile.Profile;
        upnProfilesSelect.appendChild(option);
    });
}

// Calculate the weight based on selected profile and length
function calculateWeight() {
    const selectedProfile = document.getElementById("upnProfiles").value;
    const length = parseFloat(document.getElementById("length").value);
    const profile = upnProfiles.find(p => p.Profile === selectedProfile);
    
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
