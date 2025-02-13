document.addEventListener("DOMContentLoaded", async function () {
    let estimatedWattageElement = document.getElementById('wattage');
    let totalWattage = 50;
    let acceptableWattage = 0;

    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

    let powerSupply = build['power-supply'] || null;
    let cpu = build['cpu'] || null;
    let cpuCooler = build['cpu-cooler'] || null;
    let gpu = build['video-card'] || null;

    console.log("Power Supply: ", powerSupply);
    console.log("CPU: ", cpu);
    console.log("CPU Cooler: ", cpuCooler);
    console.log("GPU: ", gpu);


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
        if (powerSupply){
            const response = await fetch(`/api/getWattage?wattageOrTdp=wattage&id=${powerSupply.id}&component=power_supply`)
            const data = await response.json() || 0;
            acceptableWattage = data.wattage;
        }
    } catch (error) {
        console.error("Error while loading power supply wattage", error);
    }

    if (acceptableWattage < totalWattage) {
        estimatedWattageElement.classList.add("text-danger");
        estimatedWattageElement.classList.remove("text-success");
    } else {
        estimatedWattageElement.classList.add("text-success");
        estimatedWattageElement.classList.remove("text-danger");
    }
    estimatedWattageElement.querySelector('span').textContent = `${totalWattage} W`;

});