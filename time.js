// script.js

function displayCurrentDateTime() {
    const element = document.getElementById('currentDateTime');
    const now = new Date();

    // Get date components
    const day = now.getDate().toString().padStart(2, '0'); // Pad with leading zero if needed
    const month = now.toLocaleString('default', { month: 'short' }); // Get short month name
    const year = now.getFullYear();

    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Pad with leading zero if needed
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const hoursStr = hours.toString().padStart(2, '0'); // Pad with leading zero if needed

    // Format the date and time string
    const dateTimeString = `${day} ${month} ${year} ${hoursStr}:${minutes} ${ampm}`;

    // Update the content of the element
    element.textContent = dateTimeString;
}

// Update the date and time immediately when the page loads
displayCurrentDateTime();

// Update the date and time every second
setInterval(displayCurrentDateTime, 1000);
