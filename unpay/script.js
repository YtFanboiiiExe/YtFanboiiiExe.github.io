const appList = document.querySelector(".app-list");
const featuredList = document.querySelector(".featured-list");

// Fetch data from the JSON file for featured apps
fetch("featured-apps.json")
    .then(response => response.json())
    .then(data => {
        // Create app cards for the featured apps
        data.forEach(app => {
            const appCard = document.createElement("div");
            appCard.classList.add("app-card");
            appCard.innerHTML = `
                <img src="${app.icon}" alt="${app.name}">
                <h2>${app.name}</h2>
                <p>${app.description}</p>
            `;
            featuredList.appendChild(appCard);
        });
    })
    .catch(error => console.error("Error loading featured apps:", error));

// Example app data for all apps
const apps = [
    { name: "App 1", icon: "app1.png", description: "Description of App 1" },
    { name: "App 2", icon: "app2.png", description: "Description of App 2" },
    // Add more app data here
];

// Create app cards for all apps
apps.forEach(app => {
    const appCard = document.createElement("div");
    appCard.classList.add("app-card");
    appCard.innerHTML = `
        <img src="${app.icon}" alt="${app.name}">
        <h2>${app.name}</h2>
        <p>${app.description}</p>
    `;
    appList.appendChild(appCard);
});
