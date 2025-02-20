async function updateCompatibility() {

    await new Promise(resolve => setTimeout(resolve, 0));
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

    const components = {
        cpu: build["cpu"],
        cpuCooler: build["cpu-cooler"],
        motherboard: build["motherboard"],
        memory: build["memory"],
        storage: build["storage"],
        videoCard: build["video-card"],
        powerSupply: build["power-supply"],
        compCase: build["case"]
    };

    const isCompatibleElement = document.getElementById("isCompatible");

    let compatibilityChecks = {
        cpuMoboComp: true,
        motherboardCaseComp: true,
        motherboardMemoryComp: true,
        cpuCoolerCaseComp: true,
        gpuPowerSupplyComp: true,
        gpuCaseComp: true,
        gpuMoboComp: true,
        storageMoboComp: true
    };

    const compatibilityEndpoints = [{
        key: "cpuMoboComp",
        url: `comp/api/checkCpuAndMoboComp?cpuId=${components.cpu?.id}&moboId=${components.motherboard?.id}`,
        rowIds: ["cpuRow", "moboRow"]
    }, {
        key: "motherboardCaseComp",
        url: `comp/api/checkMoboAndCompCaseFormFactorComp?moboId=${components.motherboard?.id}&compCaseId=${components.compCase?.id}`,
        rowIds: ["moboRow", "caseRow"]
    }, {
        key: "motherboardMemoryComp",
        url: `comp/api/checkMoboAndRamComp?moboId=${components.motherboard?.id}&ramId=${components.memory?.id}`,
        rowIds: ["moboRow", "memoryRow"]
    }, {
        key: "cpuCoolerCaseComp",
        url: `comp/api/checkCpuCoolerAndCaseComp?cpuCoolerId=${components.cpuCooler?.id}&compCaseId=${components.compCase?.id}`,
        rowIds: ["cpuCoolerRow", "caseRow"]
    }, {
        key: "gpuPowerSupplyComp",
        url: `comp/api/checkGpuAndPowerSupplyComp?gpuId=${components.videoCard?.id}&powerSupplyId=${components.powerSupply?.id}`,
        rowIds: ["gpuRow", "powerSupplyRow"]
    }, {
        key: "gpuCaseComp",
        url: `comp/api/checkGpuAndCaseComp?gpuId=${components.videoCard?.id}&caseId=${components.compCase?.id}`,
        rowIds: ["gpuRow", "caseRow"]
    }, {
        key: "gpuMoboComp",
        url: `comp/api/checkGpuAndMoboComp?gpuId=${components.videoCard?.id}&moboId=${components.motherboard?.id}`,
        rowIds: ["gpuRow", "moboRow"]
    }, {
        key: "storageMoboComp",
        url: `comp/api/checkStorageAndMoboComp?storageId=${components.storage?.id}&moboId=${components.motherboard?.id}`,
        rowIds: ["storageRow", "moboRow"]
    }];

    async function checkCompatibility() {
        try {
            const requests = compatibilityEndpoints
                .filter(({url}) => !url.includes("undefined"))
                .map(async ({key, url, rowIds}) => {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                        const data = await response.json();
                        compatibilityChecks[key] = Object.values(data)[0] || false;
                        updateComponents(rowIds[0], rowIds[1], compatibilityChecks[key]);
                        console.log("Compatibility check for", key, ":", compatibilityChecks[key]);
                    } catch (error) {
                        console.error(`Error fetching ${key}:`, error);
                    }
                });
            await Promise.all(requests);

            const allCompatible = Object.values(compatibilityChecks).every(Boolean);
            isCompatibleElement.textContent = allCompatible ? "Compatible" : "Incompatible";
            isCompatibleElement.classList.toggle("text-success", allCompatible);
            isCompatibleElement.classList.toggle("text-danger", !allCompatible);

        } catch (error) {
            console.error("Error checking compatibility:", error);
        }
    }
    await checkCompatibility();

    function updateComponents(idFirst, idSecond, isCompatible) {
        try {
            const firstComponent = document.getElementById(idFirst);
            const secondComponent = document.getElementById(idSecond);
            if (!firstComponent || !secondComponent) return;

            firstComponent.classList.toggle("text-success", isCompatible);
            firstComponent.classList.toggle("text-danger", !isCompatible);
            secondComponent.classList.toggle("text-success", isCompatible);
            secondComponent.classList.toggle("text-danger", !isCompatible);
        } catch (error) {
            console.error(`Error updating compatibility for ${idFirst} and ${idSecond}:`, error);
        }
    }
}

function observeBuildCompChanges() {
    document.querySelectorAll('.clear-btn').forEach(button => {
        button.addEventListener('click', async () => {
            console.log("Component removed, updating compatibility...");
            await updateCompatibility();
        });
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    updateCompatibility().then(_ => console.log("Initial compatibility updated"));
    observeBuildCompChanges();
});