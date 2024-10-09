const steelSections = {
    "Steel Plates and Sheets": ["Length (m)", "Width (m)", "Thickness (mm)"],
    "Chequered Steel Plates": ["Length (m)", "Width (m)", "Thickness (mm)"], // الصاج البقلاوه
    "Seamless Steel Pipes - Circular": ["Length (m)", "Outer Diameter (mm)", "Thickness (mm)"],
    "Hollow Structural Sections - Square": ["Length (m)", "Side Length (mm)", "Thickness (mm)"],
    "Hollow Structural Sections - Rectangular": ["Length (m)", "Width (mm)", "Height (mm)", "Thickness (mm)"],
    "Round Steel Bars": ["Length (m)", "Diameter (mm)"],
    "Square Steel Bars": ["Length (m)", "Side Length (mm)"],
    "Flat Bars": ["Length (m)", "Width (mm)", "Thickness (mm)"],
    "Equal Angles": ["Length (m)", "Leg Length (mm)", "Thickness (mm)"],
    "Unequal Angles": ["Length (m)", "Leg Length 1 (mm)", "Leg Length 2 (mm)", "Thickness (mm)"],
    "T-profile": ["Length (m)", "Width (mm)", "Height (mm)", "Thickness (mm)"], // Added dimensions for T-profile
    "Hexagonal Sections": ["Length (m)", "Side (mm)"]
};

function showFields() {
    const sectionType = document.getElementById("sectionType").value;
    const fieldsContainer = document.getElementById("fields");
    const sectionImage = document.getElementById("sectionImage");

    fieldsContainer.innerHTML = '';
    sectionImage.style.display = "none";

    if (sectionType === "UPN") {
        window.location.href = "file:///D:/app_steel/upn/index.html";
    } else if (sectionType === "IPN") {
        window.location.href = "file:///D:/app_steel/ipn/index.html";
    } else if (sectionType === "IPE") {
        window.location.href = "file:///D:/app_steel/ipe/index.html";
    } else if (sectionType === "HEA") {
        window.location.href = "file:///D:/app_steel/hea/index.html";
    } else if (sectionType === "HEB") {
        window.location.href = "file:///D:/app_steel/heb/index.html";
    } else if (sectionType && steelSections[sectionType]) {
        steelSections[sectionType].forEach(field => {
            const inputField = document.createElement("input");
            inputField.type = "number";
            inputField.placeholder = field;
            inputField.oninput = calculateWeight; // Add input event listener
            fieldsContainer.appendChild(inputField);
        });

        // هنا تضيف شرط للصورة الخاصة بـ T-profile
        if (sectionType === "T-profile") {
            sectionImage.src = `images/t_profile.png`;
        } else {
            sectionImage.src = `images/${sectionType.replace(/\s+/g, '_').toLowerCase()}.png`;
        }
        sectionImage.style.display = "block"; // Show image
    } else {
        alert("Invalid section type selected. Please choose a valid option.");
    }
}


function calculateWeight() {
    const sectionType = document.getElementById("sectionType").value;
    const fields = document.getElementById("fields").children;
    const density = 7850; // kg/m³ for steel
    let weight = 0;

    if (sectionType && fields.length > 0) {
        const values = Array.from(fields).map(field => parseFloat(field.value));

        // Validate input values: check for NaN, negative, or zero values
        if (values.some(value => isNaN(value) || value <= 0)) {
            document.getElementById("result").innerHTML = "Please enter valid dimensions for all fields. Values must be greater than zero.";
            return;
        }

        // Check values based on the section type
        switch (sectionType) {
            case "Steel Plates and Sheets":
                const [lengthPlate, widthPlate, thicknessPlate] = values;
                weight = lengthPlate * widthPlate * (thicknessPlate / 1000) * density; // in kg
                break;
            
            case "Chequered Steel Plates": // حساب الصاج البقلاوه
                const [lengthCheq, widthCheq, thicknessCheq] = values;
                const adjustedThickness = thicknessCheq + 0.3; // إضافة 0.3 للسمك
                weight = lengthCheq * widthCheq * (adjustedThickness / 1000) * density; // حساب الوزن
                break;
                
            case "Seamless Steel Pipes - Circular":
                const [lengthPipe, outerDiameter, thicknessPipe] = values;
                const innerDiameter = outerDiameter - 2 * thicknessPipe;
                weight = lengthPipe * (Math.PI / 4) * (Math.pow(outerDiameter, 2) - Math.pow(innerDiameter, 2)) * (density / 1000000); // in kg
                break;
            case "Hollow Structural Sections - Square":
                const [lengthSquare, sideLengthSquare, thicknessSquare] = values;
                weight = lengthSquare * (Math.pow(sideLengthSquare, 2) - Math.pow(sideLengthSquare - 2 * thicknessSquare, 2)) * (density / 1000000); // in kg
                break;
            case "Hollow Structural Sections - Rectangular":
                const [lengthRect, widthRect, heightRect, thicknessRect] = values;
                weight = lengthRect * ((widthRect * heightRect) - ((widthRect - 2 * thicknessRect) * (heightRect - 2 * thicknessRect))) * (density / 1000000); // in kg
                break;
            case "Round Steel Bars":
                const [lengthRound, diameterRound] = values;
                weight = lengthRound * (Math.PI / 4) * Math.pow(diameterRound, 2) * (density / 1000000); // in kg
                break;
            case "Square Steel Bars":
                const [lengthSquareBar, sideLengthSquareBar] = values;
                weight = lengthSquareBar * Math.pow(sideLengthSquareBar, 2) * (density / 1000000); // in kg
                break;
            case "Flat Bars":
                const [lengthFlat, widthFlat, thicknessFlat] = values;
                weight = lengthFlat * widthFlat * (thicknessFlat / 1000) * density; // in kg
                break;

            case "Equal Angles":
                    // Assuming the dimensions provided are [lengthAngle, legLengthAngle, thicknessAngle]
                    const [lengthAngle, legLengthAngle, thicknessAngle] = values;
                    // Weight calculation for Equal Angles
                    weight = 2 * lengthAngle * (legLengthAngle / 1000 * thicknessAngle / 1000) * density; // in kg
                    break;
            case "Unequal Angles": {
                        const [lengthUnequalAngle, legLength1, legLength2, thicknessUnequal] = values; // تأكد من إضافة thicknessUnequal هنا
                        // تحقق من أن القيم المدخلة صالحة
                        if (lengthUnequalAngle <= 0 || legLength1 <= 0 || legLength2 <= 0 || thicknessUnequal <= 0) {
                            document.getElementById("result").innerHTML = "Please enter valid dimensions for all fields. Values must be greater than zero.";
                            return; // توقف عن تنفيذ الكود إذا كانت القيم غير صالحة
                        }
                        
                        // حساب الوزن
                        weight = lengthUnequalAngle * 
                                 ((legLength1 * thicknessUnequal) + 
                                  (legLength2 * thicknessUnequal) - 
                                  (thicknessUnequal ** 2)) * 
                                 (density / 1000000); // تحويل الكثافة إلى كجم/م³
                    
                        break;
                    }                    
            case "T-profile":
                    const [lengthT, widthT, heightT, thicknessT] = values;
                    // Calculate the weight of the T-profile
                    weight = lengthT * ((widthT * heightT) - ((widthT - thicknessT) * (heightT - thicknessT))) * (density / 1000000); // in kg
                    break;
            
            case "Hexagonal Sections": {
                        const [lengthHexagon, flatToFlatDistance] = values; // المسافة بين الجوانب المتقابلة
                        const sideLength = flatToFlatDistance / Math.sqrt(3); // حساب طول الجانب بناءً على المسافة بين الجوانب المتقابلة
                        
                        // Calculate the area of the hexagonal section
                        const areaHexagon = (3 * Math.sqrt(3) / 2) * Math.pow(sideLength, 2);
                        
                        // Calculate the weight: طول × المساحة × الكثافة (الوزن = الطول × المساحة × الكثافة)
                        weight = lengthHexagon * areaHexagon * (density / 1000000); // kg
                        break;
                    }
                    
                    

        }
        
        document.getElementById("result").innerHTML = `Weight: ${weight.toFixed(2)} kg`; // Show weight in kg
    } else {
        document.getElementById("result").innerHTML = "Please select a steel section type.";
    }
}
