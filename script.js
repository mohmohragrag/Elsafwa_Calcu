const steelSections = {
    "Steel Plates and Sheets": ["Length (mm)", "Width (mm)", "Thickness (mm)"],
    "Chequered Steel Plates": ["Length (mm)", "Width (mm)", "Thickness (mm)"], // الصاج البقلاوه
    "Seamless Steel Pipes - Circular": ["Length (mm)", "Outer Diameter (mm)", "Thickness (mm)"],
    "Hollow Structural Sections - Square": ["Length (mm)", "Side Length (mm)", "Thickness (mm)"],
    "Hollow Structural Sections - Rectangular": ["Length (mm)", "Width (mm)", "Height (mm)", "Thickness (mm)"],
    "Round Steel Bars": ["Length (mm)", "Diameter (mm)"],
    "Square Steel Bars": ["Length (mm)", "Side Length (mm)"],
    "Flat Bars": ["Length (mm)", "Width (mm)", "Thickness (mm)"],
    "Equal Angles": ["Length (mm)", "Leg Length (mm)", "Thickness (mm)"],
    "Unequal Angles": ["Length (mm)", "Leg Length 1 (mm)", "Leg Length 2 (mm)", "Thickness (mm)"],
    "T-profile": ["Length (mm)", "Width (mm)", "Height (mm)", "Thickness (mm)"], // Added dimensions for T-profile
    "Hexagonal Sections": ["Length (mm)", "Outer (mm)"]
};

function showFields() {
    const sectionType = document.getElementById("sectionType").value;
    const fieldsContainer = document.getElementById("fields");
    const sectionImage = document.getElementById("sectionImage");

    fieldsContainer.innerHTML = '';
    sectionImage.style.display = "none";

    // Redirect for specific section types
    const redirectUrls = {
        "UPN": "https://mohmohragrag.github.io/Elsafwa_Calculator/upn/index.html",
        "IPN": "https://mohmohragrag.github.io/Elsafwa_Calculator/ipn/index.html",
        "IPE": "https://mohmohragrag.github.io/Elsafwa_Calculator/ipe/index.html",
        "HEA": "https://mohmohragrag.github.io/Elsafwa_Calculator/hea/index.html",
        "HEB": "https://mohmohragrag.github.io/Elsafwa_Calculator/heb/index.html"
    };

    if (redirectUrls[sectionType]) {
        window.location.href = redirectUrls[sectionType];
    } else if (steelSections[sectionType]) {
        createInputFields(steelSections[sectionType]);
        setSectionImage(sectionType, sectionImage);
    } else {
        alert("Invalid section type selected. Please choose a valid option.");
    }
}

function createInputFields(fields) {
    const fieldsContainer = document.getElementById("fields");
    fields.forEach(field => {
        const inputField = document.createElement("input");
        inputField.type = "number";
        inputField.placeholder = field;
        inputField.oninput = calculateWeight; // Add input event listener
        fieldsContainer.appendChild(inputField);
    });
}

function setSectionImage(sectionType, sectionImage) {
    const imagePath = `images/${sectionType === "T-profile" ? "t_profile" : sectionType.replace(/\s+/g, '_').toLowerCase()}.png`;
    sectionImage.src = imagePath;
    sectionImage.style.display = "block"; // Show image
}

function calculateWeight() {
    const sectionType = document.getElementById("sectionType").value;
    const fields = Array.from(document.getElementById("fields").children);
    const density = 7850; // kg/m³ for steel
    let weight = 0;

    if (sectionType && fields.length > 0) {
        const values = fields.map(field => parseFloat(field.value));

        // Validate input values: check for NaN, negative, or zero values
        if (values.some(value => isNaN(value) || value <= 0)) {
            document.getElementById("result").innerHTML = "Please enter valid dimensions for all fields. Values must be greater than zero.";
            return;
        }

        weight = calculateSectionWeight(sectionType, values, density);
        document.getElementById("result").innerHTML = `Weight: ${weight.toFixed(2)} kg`; // Show weight in kg
    } else {
        document.getElementById("result").innerHTML = "Please select a steel section type.";
    }
}

function calculateSectionWeight(sectionType, values, density) {
    switch (sectionType) {
        case "Steel Plates and Sheets":
            return ((values[0] / 1000) * (values[1] / 1000) * (values[2] / 1000) * density) / 1000;

        case "Chequered Steel Plates": // حساب الصاج البقلاوه
            const adjustedThickness = values[2] + 0.3; // Adding 0.3 for thickness
            return ((values[0] / 1000) * (values[1] / 1000) * (adjustedThickness / 1000) * density) / 1000;

        case "Seamless Steel Pipes - Circular":
            return ((values[1] - values[2]) * values[2] * 0.025 * (values[0] + 20)) / 1000; // Calculate weight using the modified formula

        case "Hollow Structural Sections - Square":
            return ((values[0] / 1000) * (Math.pow(values[1] / 1000, 2) - Math.pow((values[1] - 2 * values[2]) / 1000, 2)) * density) / 1000;

        case "Hollow Structural Sections - Rectangular":
            return ((values[0] / 1000) * ((values[1] / 1000) * (values[2] / 1000) - ((values[1] - 2 * values[3]) / 1000) * ((values[2] - 2 * values[3]) / 1000)) * density) / 1000;

        case "Round Steel Bars":
            return ((values[0] / 1000) * (Math.PI / 4) * Math.pow(values[1] / 1000, 2) * density) / 1000;

        case "Square Steel Bars":
            return ((values[0] / 1000) * Math.pow(values[1] / 1000, 2) * density) / 1000;

        case "Flat Bars":
            return ((values[0] / 1000) * (values[1] / 1000) * (values[2] / 1000) * density) / 1000;

        case "Equal Angles":
            return (2 * (values[0] / 1000) * (values[1] / 1000 * values[2] / 1000) * density) / 1000;

        case "Unequal Angles":
            return ((values[0] / 1000) *
                ((values[1] / 1000 * values[3] / 1000) +
                    (values[2] / 1000 * values[3] / 1000) -
                    Math.pow(values[3] / 1000, 2)) *
                density) / 1000;

        case "T-profile":
            return ((values[0] / 1000) * ((values[1] / 1000 * values[2] / 1000) - ((values[1] - values[3]) / 1000 * (values[2] - values[3]) / 1000)) * density) / 1000;

        case "Hexagonal Sections":
            const sideLength = values[1] / Math.sqrt(3); // Calculate side length based on flat-to-flat distance
            const areaHexagon = (3 * Math.sqrt(3) / 2) * Math.pow(sideLength / 1000, 2); // in m²
            return ((values[0] / 1000) * areaHexagon * density) / 1000;

        default:
            return 0;
    }
}
