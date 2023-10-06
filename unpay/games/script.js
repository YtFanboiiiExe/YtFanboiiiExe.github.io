// Example game data for the Games page
const games = [
    { 
        name: "Game 1", 
        icon: "game1.png", 
        description: "Description of Game 1", 
        downloadUrl: "https://example.com/download/game1"
    },
    { 
        name: "Game 2", 
        icon: "game2.png", 
        description: "Description of Game 2", 
        downloadUrl: "https://example.com/download/game2"
    },
    // Add more game data here with download URLs
];

// Create app cards for the Games page with download links
const gamesList = document.querySelector("#games");
games.forEach(game => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("app-card");
    gameCard.innerHTML = `
        <img src="${game.icon}" alt="${game.name}">
        <h2>${game.name}</h2>
        <p>${game.description}</p>
        <a href="${game.downloadUrl}" class="download-link" target="_blank">Download</a>
    `;
    gamesList.appendChild(gameCard);
});
