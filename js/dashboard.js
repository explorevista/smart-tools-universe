const container = document.querySelector(".tools-grid");

function renderTools() {
    tools.forEach((tool, index) => {

        let card = document.createElement("div");
        card.className = "tool-card";

        card.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.category}</p>
            <small>${tool.premium ? "Premium" : "Free"}</small>
        `;

        card.onclick = () => openToolByName(tool.name);

        container.appendChild(card);
    });
}

function openToolByName(name) {

    const map = {
        "PDF Toolkit": "tools/pdf-toolkit.html",
        "Password Generator": "tools/password-generator.html",
        "Resume Cover Maker": "tools/resume-maker.html",
        "AI Translator": "tools/translator.html"
    };

    if(map[name]) {
        window.location.href = map[name];
    } else {
        alert("Tool coming soon: " + name);
    }
}

renderTools();
