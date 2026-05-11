/* TOOL RENDER SYSTEM */

const toolsGrid = document.querySelector(".tools-grid");

let currentCategory = "all";

/* RENDER TOOLS */

function renderTools(){

    toolsGrid.innerHTML = "";

    let searchValue =
    document
    .getElementById("search")
    .value
    .toLowerCase();

    let filteredTools =
    tools.filter(tool => {

        let matchesSearch =
        tool.name.toLowerCase()
        .includes(searchValue);

        let matchesCategory =
        currentCategory === "all"
        ||
        tool.category === currentCategory;

        return matchesSearch && matchesCategory;
    });

    if(filteredTools.length === 0){

        toolsGrid.innerHTML = `
        <div class="empty-state">
            <h2>No Tools Found</h2>
        </div>
        `;

        return;
    }

    filteredTools.forEach(tool => {

        let badge =
        tool.premium
        ?
        `<span class="premium-badge">
            PREMIUM
        </span>`
        :
        `<span class="free-badge">
            FREE
        </span>`;

        let card = `

        <div class="tool-card"
        onclick="openTool('${tool.link}')">

            <img
            src="${tool.image}"
            class="tool-image">

            <div class="tool-content">

                <div class="tool-top">

                    <div class="tool-icon">
                        ${tool.icon}
                    </div>

                    ${badge}

                </div>

                <h3>${tool.name}</h3>

                <p>${tool.description}</p>

            </div>

        </div>

        `;

        toolsGrid.innerHTML += card;

    });

}

/* OPEN TOOL */

function openTool(link){

    window.location.href = link;
}

/* SEARCH */

document
.getElementById("search")
.addEventListener("input", renderTools);

/* FILTER */

function filterCategory(category){

    currentCategory = category;

    renderTools();
}

/* SIDEBAR TOGGLE */

function toggleSidebar(){

    document
    .getElementById("sidebar")
    .classList
    .toggle("active");
}

/* DARK / LIGHT MODE */

let darkMode = true;

function toggleTheme(){

    if(darkMode){

        document.body.style.background =
        "#f8fafc";

        document.body.style.color =
        "#0f172a";

        darkMode = false;

    }else{

        document.body.style.background =
        "#0b1120";

        document.body.style.color =
        "white";

        darkMode = true;
    }
}

/* INITIAL LOAD */

renderTools();
