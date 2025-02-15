async function updateWattage() {
    let estimatedWattageElement = document.getElementById('wattage');
    if (!estimatedWattageElement) return;

    let totalWattage = 0;
    let acceptableWattage = 0;
    let gpuRecommendedPower = 0;
    let powerSupplyPower = 0;

    await new Promise(resolve => setTimeout(resolve, 0));

    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

    let powerSupply = build['power-supply'] || null;
    let cpu = build['cpu'] || null;
    let cpuCooler = build['cpu-cooler'] || null;
    let gpu = build['video-card'] || null;

    try {
        if (cpu) {
            const response = await fetch(`/api/getWattage?wattageOrTdp=tdp&id=${cpu.id}&component=cpu`)
            const data = await response.json() || 0;
            totalWattage += data.wattage;
        }
    } catch (error) {
        console.error("Error while loading cpu tdp", error);
    }
    try {
        if (cpuCooler){
            const response= await fetch(`/api/getWattage?wattageOrTdp=tdp&id=${cpuCooler.id}&component=cpu_cooler`)
            const data = await response.json() || 0;
            totalWattage += data.wattage;
        }
    } catch (error) {
        console.error("Error while loading cpu cooler tdp", error);
    }
    try {
        if (gpu){
            const response = await fetch(`/api/getWattage?wattageOrTdp=tdp&id=${gpu.id}&component=gpu`)
            const data = await response.json() || 0;
            totalWattage += data.wattage;
        }
    } catch (error) {
        console.error("Error while loading gpu tdp", error);
    }

    try {
        if (gpu && powerSupply){
            const response = await fetch(`/api/checkIfGpuHasEnoughPower?gpuId=${gpu.id}`)
            const data = await response.json() || 0;
            gpuRecommendedPower = data.recommendedPower;
        }
    } catch (error) {
        console.error("Error while loading gpu recommended power", error);
    }

    try {
        if (powerSupply){
            const response = await fetch(`/api/getWattage?wattageOrTdp=wattage&id=${powerSupply.id}&component=power_supply`)
            const data = await response.json() || 0;
            powerSupplyPower = data.wattage;
            acceptableWattage = data.wattage + 50;
        }
    } catch (error) {
        console.error("Error while loading power supply wattage", error);
    }

    console.log("Gpu recommended power: ", gpuRecommendedPower);
    console.log("Power supply power: ", powerSupplyPower);

    if ((acceptableWattage < totalWattage) || (powerSupplyPower < gpuRecommendedPower) ) {
        estimatedWattageElement.classList.add("text-danger");
        estimatedWattageElement.classList.remove("text-success");
    } else {
        estimatedWattageElement.classList.add("text-success");
        estimatedWattageElement.classList.remove("text-danger");
    }
    estimatedWattageElement.querySelector('span').textContent = `${totalWattage} W`;
}

function observeBuildChanges() {
    const buttons = document.getElementsByClassName('clear-btn');

    if (!buttons.length) return;

    Array.from(buttons).forEach(button => {
        button.addEventListener("click", () => {
            console.log("Detected change in selected components");
            updateWattage().then(() => console.log("Wattage updated"));
        });
    });
}


document.addEventListener("DOMContentLoaded", function () {
    updateWattage().then(r => console.log("Initial wattage updated"));
    observeBuildChanges();
});
