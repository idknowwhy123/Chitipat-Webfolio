const username = "idknowwhy123"; // Replace with your GitHub username
const repoGrid = document.getElementById("repo-grid");

fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
        data.slice(0, 4).forEach((repo) => {
            // Create an anchor tag (link)
            const repoLink = document.createElement("a");
            repoLink.href = repo.html_url; // Link to the repository
            repoLink.target = "_blank"; // Open link in a new tab
            repoLink.classList.add("repo-button"); // Optional: Style it as a button

            // Create a repo card inside the link
            const repoCard = document.createElement("div");
            repoCard.classList.add("repo-card");
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <span class="badge">${repo.language || "Unknown"}</span>
            `;

            repoCard.classList.add("poppins-regular");
            repoLink.appendChild(repoCard);
            repoGrid.appendChild(repoLink); 
        });
    })
    .catch((error) => console.error("Error fetching repositories:", error));
