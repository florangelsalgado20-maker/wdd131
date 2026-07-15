// Display current year in footer
const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = new Date().getFullYear();

// Display last modified date
const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = document.lastModified;

// Static weather data
const temperature = 28; // °C
const windSpeed = 12; // km/h

/**
 * Calculate wind chill factor
 */
function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8) 
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + ' °C'
        : "N/A";
}

// Calculate and display wind chill
document.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.getElementById('wind-chill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChill;
});
