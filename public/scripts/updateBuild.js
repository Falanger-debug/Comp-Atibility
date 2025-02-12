document.addEventListener("DOMContentLoaded", function () {
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
    let totalTDP = 0;

    function updateComponent(id, component) {
        if (build[component]) {
            document.getElementById(id + "-selection").innerHTML = `
            ${build[component].model}`;
        }
    }


    updateComponent("cpu", "cpu");
    updateComponent("video-card", "video-card");
    updateComponent("motherboard", "motherboard");
    updateComponent("memory", "memory");
    updateComponent("storage", "storage");
    updateComponent("power-supply", "power-supply");
    updateComponent("case", "case");
    updateComponent("cpu-cooler", "cpu-cooler");

});