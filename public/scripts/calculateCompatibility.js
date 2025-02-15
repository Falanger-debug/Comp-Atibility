document.addEventListener("DOMContentLoaded", async function () {
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
    const path = window.location.pathname;
    const isCompPage = path.startsWith("/comp");


    const cpu = build["cpu"];
    const cpuCooler = build["cpu-cooler"];
    const motherboard = build["motherboard"];
    const memory = build["memory"];
    const storage = build["storage"];
    const videoCard = build["video-card"];
    const powerSupply = build["power-supply"];

    let cpuMoboComp = false;


    // check cpu and motherboard compatibility
    if (cpu && motherboard) {
        const response = await fetch(`comp/api/checkCpuAndMoboComp?cpuId=${cpu.id}&moboId=${motherboard.id}`)
        console.log("response: ", response);
        cpuMoboComp = await response.json() || false;
        console.log("cpuMoboComp: ", cpuMoboComp);
    }




});
