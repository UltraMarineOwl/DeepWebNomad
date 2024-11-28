// script.js

// Function to show/hide leak details
function showLeakDetails(leakId) {
    const leakElement = document.getElementById(leakId); // Get the leak element by ID
    if (!leakElement) {
        console.error(`No element found with ID: ${leakId}`);
        return;
    }

    const details = leakElement.querySelector('.leak-details'); // Find the .leak-details within the leak element
    if (details) {
        details.classList.toggle('hidden'); // Toggle visibility
    } else {
        console.error(`No .leak-details found inside element with ID: ${leakId}`);
    }
}


// Function to handle search
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const result = document.getElementById('searchResult');

    if (query) {
        if (query.includes('john') || query.includes('doe') || query.includes('admin')) {
            result.textContent = `Search Result: Found matches in "Corporate Email Breach".`;
        } else if (query.includes('user') || query.includes('happy')) {
            result.textContent = `Search Result: Found matches in "Social Media User Dump".`;
        } else {
            result.textContent = `Search Result: No matches found.`;
        }
    } else {
        result.textContent = `Please enter a valid search term.`;
    }
});
