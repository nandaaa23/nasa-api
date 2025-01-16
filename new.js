const fetch = globalThis.fetch || require('node-fetch');

const apiKey = "7eAWnd1zCr085a3fYsWoqwiQqTM11wDfSKPmdKAS"; // Replace with your NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchAPOD() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Log the fetched data
        console.log("Title:", data.title);
        console.log("Date:", data.date);
        console.log("Explanation:", data.explanation);
        console.log("Image URL:", data.url);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchAPOD();
