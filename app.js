function convertTemperature() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value in Celsius");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("temperatureResult").innerText = `${celsius} °C is equal to ${fahrenheit.toFixed(2)} °F`;
}

function convertLength() {
    let meter = document.getElementById("meter").value;
    if (meter === "") {
        alert("Please enter a value in Meter");
        return;
    }
    let kilometer = meter / 1000;
    document.getElementById("lengthResult").innerText = `${meter} Meter is equal to ${kilometer.toFixed(3)} Kilometer`;
}
