let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');
let result = document.getElementById('result');
let noValue = document.getElementById('noValue');
let noUnit = document.getElementById('noUnit');
let button = document.getElementById('convert');

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * (9 / 5) + 32;
}

button.onclick = function() {
    let val = document.getElementById('value').value;
    let ans;
    noValue.innerHTML = "";
    noUnit.innerHTML = "";

    if (val === "") {
        noValue.innerHTML = "*Must provide a value";
        return; 
    }
    
    val = Number(val);

    if (isNaN(val)) {
        noValue.innerHTML = "*Please enter a valid number";
        return;
    }

    if (celsius.checked) {
        ans = `${toCelsius(val).toFixed(2)} °C`; 
    } else if (fahrenheit.checked) {
        ans = `${toFahrenheit(val).toFixed(2)} °F`; 
    } else {
        noUnit.innerHTML = "*Must select a unit for conversion";
        return;
    }

    result.innerHTML = ans;
}
