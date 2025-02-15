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
    let motherboardMemoryComp = false;

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

    // check motherboard and ram compatibility
    if (motherboard && memory) {
        const response = await fetch(`comp/api/checkMoboAndRamComp?moboId=${motherboard.id}&ramId=${memory.id}`)
        const data = await response.json();
        motherboardMemoryComp = data.isRamComp || false;
        console.log("motherboardRamComp: ", motherboardMemoryComp);
    }

    // check cpu_cooler and case compatibility
    if (cpuCooler && compCase) {
        const response = await fetch(`comp/api/checkCpuCoolerAndCaseComp?cpuCoolerId=${cpuCooler.id}&compCaseId=${compCase.id}`)
        const data = await response.json();
        console.log("cpuCoolerCaseComp: ", data.isCpuCoolerComp);
    }

    // check if gpu and power supply are compatible
    if (videoCard && powerSupply) {
        const response = await fetch(`comp/api/checkGpuAndPowerSupplyComp?gpuId=${videoCard.id}&powerSupplyId=${powerSupply.id}`)
        const data = await response.json();
        console.log("gpuPowerSupplyComp: ", data.isGpuPowerComp);
    }

    // check if gpu and case are compatible
    if (videoCard && compCase) {
        const response = await fetch(`comp/api/checkGpuAndCaseComp?gpuId=${videoCard.id}&caseId=${compCase.id}`)
        const data = await response.json();
        console.log("gpuCaseComp: ", data.isGpuCaseComp);
    }


});
