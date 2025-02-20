document.addEventListener("DOMContentLoaded", async function () {
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

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

            const selectionElementMobile = document.getElementById(id + "-selection-mobile")
            const brandElementMobile = document.getElementById(id + "-brand-mobile")

            if ((!selectionElement || !brandElement) && (!selectionElementMobile || !brandElementMobile)) {
                console.error(`Element with id ${id} not found`);
                return;
            }

            const {brand, model} = build[component];
            const logoSrc = brandsLogos[brand] ? brandsLogos[brand].logo : null;

            if (selectionElement) selectionElement.innerHTML = model;
            if (selectionElementMobile) selectionElementMobile.innerHTML = model;
            if (brandElementMobile) brandElementMobile.innerHTML = brand;

            if (logoSrc && brandElement) {
                brandElement.innerHTML = `<img src="${logoSrc}" alt="${brand}" class="brand-logo" height="25"
                    style="background-color: white; padding: 5px; border-radius: 5px;">`;
            } else if (brandElement) {
                brandElement.textContent = brand;
            }
        }
    }


    function clearSelection(componentId) {
        let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

        if (build[componentId]) {
            delete build[componentId];
            localStorage.setItem("pcBuild", JSON.stringify(build));
        }

        const selectionElement = document.getElementById(componentId + "-selection");
        const brandElement = document.getElementById(componentId + "-brand");

        const selectionElementMobile = document.getElementById(componentId + "-selection-mobile");
        const brandElementMobile = document.getElementById(componentId + "-brand-mobile");

        if (selectionElement) selectionElement.innerHTML = "None selected";
        if (brandElement) brandElement.innerHTML = "None selected";
        if (selectionElementMobile) selectionElementMobile.innerHTML = "None selected";
        if (brandElementMobile) brandElementMobile.innerHTML = "None selected";

        setTimeout(() => {
            updateWattage();
            updateCompatibility();
        }, 0);
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

});