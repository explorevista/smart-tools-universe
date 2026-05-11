const container = document.querySelector(".tools-grid");

let allTools = tools;

/* RENDER FUNCTION */
function render(list) {
    container.innerHTML = "";

    list.forEach(tool => {

        let card = document.createElement("div");
        card.className = "tool-card";

        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.category}</p>
            <small>${tool.premium ? "Premium" : "Free"}</small>
        `;

        card.onclick = () => openTool(tool.name);

        container.appendChild(card);
    });
}

render(allTools);

/* CATEGORY FILTER */
function filterCategory(cat) {

    if(cat === "all") {
        render(allTools);
    } else {
        let filtered = allTools.filter(t => t.category === cat);
        render(filtered);
    }
}

/* SEARCH */
document.getElementById("search").addEventListener("input", (e) => {

    let value = e.target.value.toLowerCase();

    let filtered = allTools.filter(t =>
        t.name.toLowerCase().includes(value)
    );

    render(filtered);
});

/* OPEN TOOL */
function openTool(name) {

    const routes = {
        "PDF Toolkit": "tools/pdf-toolkit.html",
        "Password Generator": "tools/password-generator.html",
        "Resume Cover Maker": "tools/resume-maker.html"
    };

    if(routes[name]) {
        window.location.href = routes[name];
    } else {
        alert("Tool coming soon: " + name);
    }
}
