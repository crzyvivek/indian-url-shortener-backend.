const backendURL = "https://your-backend-url.onrender.com"; // Yaha apni backend API ka URL dalna hai

function shortenURL() {
    let longUrl = document.getElementById("longUrl").value;
    fetch(`${backendURL}/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ long_url: longUrl })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("shortenedUrl").innerText = `Shortened URL: ${backendURL}/${data.short_code}`;
    })
    .catch(error => console.error("Error:", error));
}
