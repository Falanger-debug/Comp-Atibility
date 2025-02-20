document.addEventListener("DOMContentLoaded", async function () {
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
    const cpu = build["cpu"];
    const cpuCooler = build["cpu-cooler"];
    const motherboard = build["motherboard"];
    const memory = build["memory"];
    const storage = build["storage"];
    const videoCard = build["video-card"];
    const powerSupply = build["power-supply"];
    const compCase = build["case"];

    const isCompatibleElement = document.getElementById("isCompatible");

    let cpuMoboComp = false;
    let motherboardCaseComp = false;
    let motherboardMemoryComp = false;
    let cpuCoolerCaseComp = false;
    let gpuPowerSupplyComp = false;
    let gpuCaseComp = false;
    let gpuMoboComp = false;
    let storageMoboComp = false;

    let everythingCompatible = cpuMoboComp && motherboardCaseComp && motherboardMemoryComp && cpuCoolerCaseComp
        && gpuPowerSupplyComp && gpuCaseComp && gpuMoboComp && storageMoboComp;

    // check cpu and motherboard compatibility
    if (cpu && motherboard) {
        const response = await fetch(`comp/api/checkCpuAndMoboComp?cpuId=${cpu.id}&moboId=${motherboard.id}`)
        const data = await response.json();
        cpuMoboComp = data.isSocketComp || false;
        updateCompatibility("cpuRow", "moboRow", cpuMoboComp);
        console.log("cpuMoboComp: ", cpuMoboComp);
    }

    // check motherboard and comp_case compatibility based on the form factor
    if (motherboard && compCase) {
        const response = await fetch(`comp/api/checkMoboAndCompCaseFormFactorComp?moboId=${motherboard.id}&compCaseId=${compCase.id}`)
        const data = await response.json();
        motherboardCaseComp = data.isFormFactorComp || false;
        updateCompatibility("moboRow", "caseRow", motherboardCaseComp);
        console.log("motherboardCaseComp: ", motherboardCaseComp);
    }

    // check motherboard and ram compatibility
    if (motherboard && memory) {
        const response = await fetch(`comp/api/checkMoboAndRamComp?moboId=${motherboard.id}&ramId=${memory.id}`)
        const data = await response.json();
        motherboardMemoryComp = data.isRamComp || false;
        updateCompatibility("moboRow", "memoryRow", motherboardMemoryComp);
        console.log("motherboardRamComp: ", motherboardMemoryComp);
    }

    // check cpu_cooler and case compatibility
    if (cpuCooler && compCase) {
        const response = await fetch(`comp/api/checkCpuCoolerAndCaseComp?cpuCoolerId=${cpuCooler.id}&compCaseId=${compCase.id}`)
        const data = await response.json();
        cpuCoolerCaseComp = data.isCpuCoolerComp || false;
        updateCompatibility("cpuCoolerRow", "caseRow", cpuCoolerCaseComp);
        console.log("cpuCoolerCaseComp: ", data.isCpuCoolerComp);
    }

    // check if gpu and power supply are compatible
    if (videoCard && powerSupply) {
        const response = await fetch(`comp/api/checkGpuAndPowerSupplyComp?gpuId=${videoCard.id}&powerSupplyId=${powerSupply.id}`)
        const data = await response.json();
        gpuPowerSupplyComp = data.isGpuPowerComp || false;
        updateCompatibility("gpuRow", "powerSupplyRow", gpuPowerSupplyComp);
        console.log("gpuPowerSupplyComp: ", data.isGpuPowerComp);
    }

    // check if gpu and case are compatible
    if (videoCard && compCase) {
        const response = await fetch(`comp/api/checkGpuAndCaseComp?gpuId=${videoCard.id}&caseId=${compCase.id}`)
        const data = await response.json();
        gpuCaseComp = data.isGpuCaseComp || false;
        updateCompatibility("gpuRow", "caseRow", gpuCaseComp);
        console.log("gpuCaseComp: ", data.isGpuCaseComp);
    }

    // check if gpu and motherboard are compatible
    if (videoCard && motherboard) {
        const response = await fetch(`comp/api/checkGpuAndMoboComp?gpuId=${videoCard.id}&moboId=${motherboard.id}`)
        const data = await response.json();
        gpuMoboComp = data.isGpuMoboComp || false;
        updateCompatibility("gpuRow", "moboRow", gpuMoboComp);
        console.log("gpuMoboComp: ", data.isGpuMoboComp);
    }

    // check if storage and motherboard are compatible
    if (storage && motherboard) {
        const response = await fetch(`comp/api/checkStorageAndMoboComp?storageId=${storage.id}&moboId=${motherboard.id}`)
        const data = await response.json();
        storageMoboComp = data.isStorageMoboComp || false;
        console.log("storageMoboComp: ", data.isStorageMoboComp);
        updateCompatibility("storageRow", "moboRow", storageMoboComp);
    }

    function updateCompatibility(idFirst, idSecond, comp) {
        try {
            const firstComponent = document.getElementById(idFirst);
            const secondComponent = document.getElementById(idSecond);

            if (comp) {
                firstComponent.classList.add("text-success");
                firstComponent.classList.remove("text-danger");
                secondComponent.classList.add("text-success");
                secondComponent.classList.remove("text-danger");
            } else {
                firstComponent.classList.add("text-danger");
                firstComponent.classList.remove("text-success");
                secondComponent.classList.add("text-danger");
                secondComponent.classList.remove("text-success");
            }
        } catch (error) {
            console.error("Error while loading two components with id: " + idFirst + " and " + idSecond, error);
        }
    }

    function updateCompatibilityIndicator() {
        everythingCompatible = cpuMoboComp && motherboardCaseComp && motherboardMemoryComp && cpuCoolerCaseComp
            && gpuPowerSupplyComp && gpuCaseComp && gpuMoboComp && storageMoboComp;

        if (everythingCompatible) {
            isCompatibleElement.textContent = "Compatible";
            isCompatibleElement.classList.add("text-success");
            isCompatibleElement.classList.remove("text-danger");
        } else {
            isCompatibleElement.textContent = "Incompatible";
            isCompatibleElement.classList.add("text-danger");
            isCompatibleElement.classList.remove("text-success");
        }
    }

    function observeBuildChanges() {
        const buttons = document.getElementsByClassName('clear-btn');

        if (buttons.length === 0) {
            return;
        }

        Array.from(buttons).forEach(button => {
            button.addEventListener('click', async function () {
                console.log("Detected change in selected components in calculateCompatibility.js");
                updateCompatibilityIndicator();
            });
        })
    }

    document.addEventListener("DOMContentLoaded", function () {
        observeBuildChanges();
    });


});
