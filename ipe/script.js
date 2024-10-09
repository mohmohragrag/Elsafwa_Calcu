const steelSections = {
    "IPE": [] // Adding UPN as a key
};

const ipeProfiles =[
    {
      "Profile": "IPE 80",
      "Height_h": 80,
      "Width_b": 46,
      "Thickness_s": 3.8,
      "Thickness_t": 5.2,
      "Length_L": 1,
      "Weight_per_meter": 6.00,
      "Total_weight": 6.00
    },
    {
      "Profile": "IPE 100",
      "Height_h": 100,
      "Width_b": 55,
      "Thickness_s": 4.1,
      "Thickness_t": 5.7,
      "Length_L": 1,
      "Weight_per_meter": 8.10,
      "Total_weight": 8.10
    },
    {
      "Profile": "IPE 120",
      "Height_h": 120,
      "Width_b": 64,
      "Thickness_s": 4.4,
      "Thickness_t": 6.3,
      "Length_L": 1,
      "Weight_per_meter": 10.40,
      "Total_weight": 10.40
    },
    {
      "Profile": "IPE 140",
      "Height_h": 140,
      "Width_b": 73,
      "Thickness_s": 4.7,
      "Thickness_t": 6.9,
      "Length_L": 1,
      "Weight_per_meter": 12.90,
      "Total_weight": 12.90
    },
    {
      "Profile": "IPE 160",
      "Height_h": 160,
      "Width_b": 82,
      "Thickness_s": 5.0,
      "Thickness_t": 7.4,
      "Length_L": 1,
      "Weight_per_meter": 15.80,
      "Total_weight": 15.80
    },
    {
      "Profile": "IPE 180",
      "Height_h": 180,
      "Width_b": 91,
      "Thickness_s": 5.3,
      "Thickness_t": 8.0,
      "Length_L": 1,
      "Weight_per_meter": 18.80,
      "Total_weight": 18.80
    },
    {
      "Profile": "IPE 200",
      "Height_h": 200,
      "Width_b": 100,
      "Thickness_s": 5.6,
      "Thickness_t": 8.5,
      "Length_L": 1,
      "Weight_per_meter": 22.40,
      "Total_weight": 22.40
    },
    {
      "Profile": "IPE 220",
      "Height_h": 220,
      "Width_b": 110,
      "Thickness_s": 5.9,
      "Thickness_t": 9.2,
      "Length_L": 1,
      "Weight_per_meter": 26.20,
      "Total_weight": 26.20
    },
    {
      "Profile": "IPE 240",
      "Height_h": 240,
      "Width_b": 120,
      "Thickness_s": 6.2,
      "Thickness_t": 9.8,
      "Length_L": 1,
      "Weight_per_meter": 30.70,
      "Total_weight": 30.70
    },
    {
      "Profile": "IPE 270",
      "Height_h": 270,
      "Width_b": 135,
      "Thickness_s": 6.6,
      "Thickness_t": 10.2,
      "Length_L": 1,
      "Weight_per_meter": 36.10,
      "Total_weight": 36.10
    },
    {
      "Profile": "IPE 300",
      "Height_h": 300,
      "Width_b": 150,
      "Thickness_s": 7.1,
      "Thickness_t": 10.7,
      "Length_L": 1,
      "Weight_per_meter": 42.20,
      "Total_weight": 42.20
    },
    {
      "Profile": "IPE 360",
      "Height_h": 360,
      "Width_b": 170,
      "Thickness_s": 8.0,
      "Thickness_t": 12.7,
      "Length_L": 1,
      "Weight_per_meter": 57.10,
      "Total_weight": 57.10
    },
    {
      "Profile": "IPE 400",
      "Height_h": 400,
      "Width_b": 180,
      "Thickness_s": 8.6,
      "Thickness_t": 13.5,
      "Length_L": 1,
      "Weight_per_meter": 66.30,
      "Total_weight": 66.30
    },
    {
      "Profile": "IPE 450",
      "Height_h": 450,
      "Width_b": 190,
      "Thickness_s": 9.4,
      "Thickness_t": 14.6,
      "Length_L": 1,
      "Weight_per_meter": 77.60,
      "Total_weight": 77.60
    },
    {
      "Profile": "IPE 500",
      "Height_h": 500,
      "Width_b": 200,
      "Thickness_s": 10.2,
      "Thickness_t": 16.0,
      "Length_L": 1,
      "Weight_per_meter": 90.70,
      "Total_weight": 90.70
    },
    {
      "Profile": "IPE 550",
      "Height_h": 550,
      "Width_b": 210,
      "Thickness_s": 11.1,
      "Thickness_t": 17.2,
      "Length_L": 1,
      "Weight_per_meter": 106.00,
      "Total_weight": 106.00
    },
    {
      "Profile": "IPE 600",
      "Height_h": 600,
      "Width_b": 220,
      "Thickness_s": 12.0,
      "Thickness_t": 19.0,
      "Length_L": 1,
      "Weight_per_meter": 122.00,
      "Total_weight": 122.00
    }
  ];


  function populateProfiles() {
    const ipeProfilesSelect = document.getElementById("ipeProfiles");

    ipeProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.Profile;
        option.textContent = profile.Profile;
        ipeProfilesSelect.appendChild(option);
    });
}

function calculateWeight() {
    const selectedProfile = document.getElementById("ipeProfiles").value;
    const length = parseFloat(document.getElementById("length").value);
    const profile = ipeProfiles.find(p => p.Profile === selectedProfile);
    
    if (profile && !isNaN(length) && length > 0) {
        const weightPerMeter = profile.Weight_per_meter; 
        const totalWeight = weightPerMeter * length / 1000; // حساب الوزن الإجمالي

        // إعداد البيانات لعرضها
        const profileData = `
            <strong>Profile:</strong> ${profile.Profile} <br>
            <strong>Height (mm):</strong> ${profile.Height_h} <br>
            <strong>Width (mm):</strong> ${profile.Width_b} <br>
            <strong>Thickness s (mm):</strong> ${profile.Thickness_s} <br>
            <strong>Thickness t (mm):</strong> ${profile.Thickness_t} <br>
            <strong>Length (m):</strong> ${length} <br>
            <strong>Weight per meter (kg):</strong> ${weightPerMeter} <br>
            <strong>Total weight (kg):</strong> ${totalWeight.toFixed(2)}
        `;

        document.getElementById("result").innerHTML = profileData;
    } else {
        document.getElementById("result").innerText = 'Please select a valid profile and enter a valid length.';
    }
}

// استدعاء الدالة لملء القوائم عند تحميل الصفحة
populateProfiles();