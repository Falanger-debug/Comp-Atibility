document.addEventListener("DOMContentLoaded", async function () {
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
    let totalTDP = 0;

    let brandsLogos = {};
    try {
        const response = await fetch("/data/brandsLogos.json");
        brandsLogos = await response.json();
    } catch (e) {
        console.error("Error while loading brandsLogos.json", e);
    }

    function updateComponent(id, component) {
        if (build[component]) {
            const selectionElement = document.getElementById(id + "-selection")
            const brandElement = document.getElementById(id + "-brand")

            if (!selectionElement || !brandElement) {
                console.error(`Element with id ${id} not found`);
                return;
            }

            const {brand, model} = build[component];

            const logoSrc = brandsLogos[brand] ? brandsLogos[brand].logo : null;


            console.log(logoSrc);

            selectionElement.innerHTML = model;

            if (logoSrc) {
                brandElement.innerHTML = `<img src="${logoSrc}" alt="${brand}" class="brand-logo" height="25"
                    style="background-color: white; padding: 5px; border-radius: 5px;">`;
            } else {
                brandElement.textContent = brand;
            }
        }
    }


    function clearSelection(componentId) {
        if (build[componentId]) {
            delete build[componentId];
            localStorage.setItem("pcBuild", JSON.stringify(build));
        }

        const selectionElement = document.getElementById(componentId + "-selection");
        const brandElement = document.getElementById(componentId + "-brand");

        if (selectionElement) selectionElement.innerHTML = "None selected";
        if (brandElement) brandElement.innerHTML = "None selected";

        console.log(`Cleared selection for ${componentId}`);
    }

    document.querySelectorAll(".clear-btn").forEach(button => {
        button.addEventListener("click", function () {
            const componentId = this.getAttribute("data-component");
            clearSelection(componentId);
        });
    });



    updateComponent("cpu", "cpu");
    updateComponent("video-card", "video-card");
    updateComponent("motherboard", "motherboard");
    updateComponent("memory", "memory");
    updateComponent("storage", "storage");
    updateComponent("power-supply", "power-supply");
    updateComponent("case", "case");
    updateComponent("cpu-cooler", "cpu-cooler");

    document.getElementById("clear-selection-btn").addEventListener("click", clearSelection);
});