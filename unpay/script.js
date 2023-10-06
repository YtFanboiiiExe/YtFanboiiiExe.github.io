// JavaScript for navigation - switching between pages and highlighting active link
const navLinks = document.querySelectorAll('.bottom-nav a');
const appSections = document.querySelectorAll('.app-list');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').slice(1); // Remove the '#' from the href
        appSections.forEach(section => {
            if (section.id === targetId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Highlight the active link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Example app data for all apps
const apps = [
    { name: "App 1", icon: "app1.png", description: "Description of App 1" },
    { name: "App 2", icon: "app2.png", description: "Description of App 2" },
    // Add more app data here
];

// Create app cards for all apps
const appList = document.querySelector(".app-list");
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

// Fetch data from the JSON file for featured apps
fetch("featured-apps.json")
    .then(response => response.json())
    .then(data => {
        // Create app cards for the featured apps
        const featuredList = document.querySelector("#featured");
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
