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
    const compCase = build["case"];

    let cpuMoboComp = false;
    let motherboardCaseComp = false;


    // check cpu and motherboard compatibility
    if (cpu && motherboard) {
        const response = await fetch(`comp/api/checkCpuAndMoboComp?cpuId=${cpu.id}&moboId=${motherboard.id}`)
        const data = await response.json();
        cpuMoboComp = data.isSocketComp || false;
        console.log("cpuMoboComp: ", cpuMoboComp);
    }

    // check motherboard and comp_case compatibility based on the form factor
    if (motherboard && compCase) {
        const response = await fetch(`comp/api/checkMoboAndCompCaseFormFactorComp?moboId=${motherboard.id}&compCaseId=${compCase.id}`)
        const data = await response.json();
        motherboardCaseComp = data.isFormFactorComp || false;
        console.log("motherboardCaseComp: ", motherboardCaseComp);
    }




});
