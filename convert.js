window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
    let convertButton = document.getElementById("convertButton");
    let cInput = document.getElementById("cInput");
    let fInput = document.getElementById("fInput");
    let weatherImage = document.getElementById("weatherImage");
    let errorMessage = document.getElementById("errorMessage");

    convertButton.addEventListener("click", function(event) {        
        let F;
        if(cInput.value != "") {
            let input = parseFloat(cInput.value);

            if(isNaN(input)) {
                errorMessage.innerHTML = cInput.value + " is not a number";
                return;
            } else {
                errorMessage.innerHTML = "";
            }
            
            F = convertCtoF(input);
            fInput.value = F;
        } else {
            F = parseFloat(fInput.value);

            if(isNaN(F)) {
                errorMessage.innerHTML = fInput.value + " is not a number";
                return;
            } else {
                errorMessage.innerHTML = "";
            }
            
            cInput.value = convertFtoC(F);
        }

        if(F < 32) {
            weatherImage.src = "cold.png";
        } else if(F < 51) {
            weatherImage.src = "cool.png";
        } else {
            weatherImage.src = "warm.png";
        }
    });

    cInput.addEventListener("input", function(event) {
        fInput.value = "";
    });

    fInput.addEventListener("input", function(event) {
        cInput.value = "";
    });
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
    return degreesCelsius * (9/5) + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
    return (degreesFahrenheit - 32) * (5/9);
}
