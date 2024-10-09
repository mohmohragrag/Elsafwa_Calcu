const steelSections = {
    "HEA": [] // Adding UPN as a key
};

const heaProfiles =   [
    {
        "Profile": "HEA 100",
        "Height_h": 96,
        "Width_b": 100,
        "Thickness_s": 5,
        "Thickness_t": 8,
        "Length_L": 1,
        "Weight_per_meter": 16.70,
        "Total_weight": 16.70
    },
    {
        "Profile": "HEA 120",
        "Height_h": 114,
        "Width_b": 120,
        "Thickness_s": 5,
        "Thickness_t": 8,
        "Length_L": 1,
        "Weight_per_meter": 19.90,
        "Total_weight": 19.90
    },
    {
        "Profile": "HEA 140",
        "Height_h": 133,
        "Width_b": 140,
        "Thickness_s": 5.5,
        "Thickness_t": 8.5,
        "Length_L": 1,
        "Weight_per_meter": 24.70,
        "Total_weight": 24.70
    },
    {
        "Profile": "HEA 160",
        "Height_h": 152,
        "Width_b": 160,
        "Thickness_s": 6,
        "Thickness_t": 9,
        "Length_L": 1,
        "Weight_per_meter": 30.40,
        "Total_weight": 30.40
    },
    {
        "Profile": "HEA 180",
        "Height_h": 171,
        "Width_b": 180,
        "Thickness_s": 6,
        "Thickness_t": 9.5,
        "Length_L": 1,
        "Weight_per_meter": 35.50,
        "Total_weight": 35.50
    },
    {
        "Profile": "HEA 200",
        "Height_h": 190,
        "Width_b": 200,
        "Thickness_s": 6.5,
        "Thickness_t": 10,
        "Length_L": 1,
        "Weight_per_meter": 42.30,
        "Total_weight": 42.30
    },
    {
        "Profile": "HEA 220",
        "Height_h": 210,
        "Width_b": 220,
        "Thickness_s": 7,
        "Thickness_t": 11,
        "Length_L": 1,
        "Weight_per_meter": 50.50,
        "Total_weight": 50.50
    },
    {
        "Profile": "HEA 240",
        "Height_h": 230,
        "Width_b": 240,
        "Thickness_s": 7.5,
        "Thickness_t": 12,
        "Length_L": 1,
        "Weight_per_meter": 60.30,
        "Total_weight": 60.30
    },
    {
        "Profile": "HEA 260",
        "Height_h": 250,
        "Width_b": 260,
        "Thickness_s": 7.5,
        "Thickness_t": 12.5,
        "Length_L": 1,
        "Weight_per_meter": 68.20,
        "Total_weight": 68.20
    },
    {
        "Profile": "HEA 260",
        "Height_h": 250,
        "Width_b": 260,
        "Thickness_s": 7.5,
        "Thickness_t": 12.5,
        "Length_L": 1,
        "Weight_per_meter": 68.20,
        "Total_weight": 68.20
    },
    {
        "Profile": "HEA 300",
        "Height_h": 290,
        "Width_b": 300,
        "Thickness_s": 8.5,
        "Thickness_t": 14,
        "Length_L": 1,
        "Weight_per_meter": 88.30,
        "Total_weight": 88.30
    },
    {
        "Profile": "HEA 320",
        "Height_h": 310,
        "Width_b": 300,
        "Thickness_s": 9,
        "Thickness_t": 15.5,
        "Length_L": 1,
        "Weight_per_meter": 97.60,
        "Total_weight": 97.60
    },
    {
        "Profile": "HEA 340",
        "Height_h": 330,
        "Width_b": 300,
        "Thickness_s": 9.5,
        "Thickness_t": 16.5,
        "Length_L": 1,
        "Weight_per_meter": 105.00,
        "Total_weight": 105.00
    },
    {
        "Profile": "HEA 360",
        "Height_h": 350,
        "Width_b": 300,
        "Thickness_s": 10,
        "Thickness_t": 17.5,
        "Length_L": 1,
        "Weight_per_meter": 112.00,
        "Total_weight": 112.00
    },
    {
        "Profile": "HEA 400",
        "Height_h": 390,
        "Width_b": 300,
        "Thickness_s": 11,
        "Thickness_t": 19,
        "Length_L": 1,
        "Weight_per_meter": 125.00,
        "Total_weight": 125.00
    },
    {
        "Profile": "HEA 450",
        "Height_h": 440,
        "Width_b": 300,
        "Thickness_s": 11.5,
        "Thickness_t": 21,
        "Length_L": 1,
        "Weight_per_meter": 140.00,
        "Total_weight": 140.00
    },
    {
        "Profile": "HEA 500",
        "Height_h": 490,
        "Width_b": 300,
        "Thickness_s": 12,
        "Thickness_t": 23,
        "Length_L": 1,
        "Weight_per_meter": 155.00,
        "Total_weight": 155.00
    },
    {
        "Profile": "HEA 550",
        "Height_h": 540,
        "Width_b": 300,
        "Thickness_s": 12.5,
        "Thickness_t": 24,
        "Length_L": 1,
        "Weight_per_meter": 166.00,
        "Total_weight": 166.00
    },
    {
        "Profile": "HEA 550",
        "Height_h": 540,
        "Width_b": 300,
        "Thickness_s": 12.5,
        "Thickness_t": 24,
        "Length_L": 1,
        "Weight_per_meter": 166.00,
        "Total_weight": 166.00
    },
    {
        "Profile": "HEA 600",
        "Height_h": 590,
        "Width_b": 300,
        "Thickness_s": 13,
        "Thickness_t": 25,
        "Length_L": 1,
        "Weight_per_meter": 178.00,
        "Total_weight": 178.00
    },
    {
        "Profile": "HEA 650",
        "Height_h": 640,
        "Width_b": 300,
        "Thickness_s": 13.5,
        "Thickness_t": 26,
        "Length_L": 1,
        "Weight_per_meter": 190.00,
        "Total_weight": 190.00
    },
    {
        "Profile": "HEA 700",
        "Height_h": 690,
        "Width_b": 300,
        "Thickness_s": 14.5,
        "Thickness_t": 27,
        "Length_L": 1,
        "Weight_per_meter": 204.00,
        "Total_weight": 204.00
    },
    {
        "Profile": "HEA 800",
        "Height_h": 790,
        "Width_b": 300,
        "Thickness_s": 15,
        "Thickness_t": 28,
        "Length_L": 1,
        "Weight_per_meter": 224.00,
        "Total_weight": 224.00
    },
    {
        "Profile": "HEA 900",
        "Height_h": 890,
        "Width_b": 300,
        "Thickness_s": 16,
        "Thickness_t": 30,
        "Length_L": 1,
        "Weight_per_meter": 252.00,
        "Total_weight": 252.00
    },
    {
        "Profile": "HEA 1000",
        "Height_h": 990,
        "Width_b": 300,
        "Thickness_s": 16.5,
        "Thickness_t": 31,
        "Length_L": 1,
        "Weight_per_meter": 272.00,
        "Total_weight": 272.00
    }
];
// وظيفة لحساب الوزن
function calculateWeight() {
    const selectedProfile = document.getElementById("heaProfiles").value;
    const length = parseFloat(document.getElementById("lengthInput").value) || 1; // الحصول على قيمة الطول
    const profile = heaProfiles.find(p => p.Profile === selectedProfile);

    if (profile) {
        const weight = profile.Weight_per_meter * length / 1000; // حساب الوزن الإجمالي

        const profileData = `
            <strong>Profile:</strong> ${profile.Profile} <br>
            <strong>Height (mm):</strong> ${profile.Height_h} <br>
            <strong>Width (mm):</strong> ${profile.Width_b} <br>
            <strong>Thickness t (mm):</strong> ${profile.Thickness_s} <br>
            <strong>Thickness s (mm):</strong> ${profile.Thickness_t} <br>
            <strong>Weight per Meter (kg):</strong> ${profile.Weight_per_meter} <br>
            <strong>Total Weight (kg):</strong> ${weight.toFixed(2)}  <!-- تحديث قيمة الوزن -->
        `;

        document.getElementById("result").innerHTML = profileData;
    } else {
        document.getElementById("result").innerText = 'الرجاء ملء جميع الحقول المطلوبة.';
    }
}

// وظيفة لعرض كمبوكس البروفيلات عند تحميل الصفحة
function showProfilesOnLoad() {
    const heaProfilesContainer = document.getElementById("heaProfilesContainer");
    const heaProfilesSelect = document.getElementById("heaProfiles");
    const lengthInput = document.getElementById("lengthInput");

    heaProfilesContainer.style.display = "block"; 
    heaProfiles.forEach(profile => {
        const option = document.createElement("option");
        option.value = profile.Profile;
        option.textContent = profile.Profile;
        heaProfilesSelect.appendChild(option);
    });

    // إضافة حدث تغيير لعناصر الاختيار
    heaProfilesSelect.addEventListener("change", calculateWeight);
    lengthInput.addEventListener("input", calculateWeight); // حدث الإدخال لحساب الوزن تلقائيًا

    // استدعاء دالة لحساب الوزن عند تحميل الصفحة
    calculateWeight();
}

// استدعاء دالة العرض عند تحميل الصفحة
window.onload = showProfilesOnLoad;
