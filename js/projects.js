const username = "idknowwhy123";
const repoGrid = document.getElementById("repo-grid");

fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
        data.slice(0, 4).forEach((repo) => {
            const repoLink = document.createElement("a");
            repoLink.href = repo.html_url;
            repoLink.target = "_blank";
            repoLink.classList.add("repo-button");
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
