async function updateWattage() {
    const estimatedWattageElement = document.getElementById('wattage');
    if (!estimatedWattageElement) return;

    await new Promise(resolve => setTimeout(resolve, 0));
    const build = JSON.parse(localStorage.getItem("pcBuild")) || {};

    let totalWattage = 0;
    let acceptableWattage = 0;
    let gpuRecommendedPower = 0;
    let powerSupplyPower = 0;

    const components = [
        { key: 'cpu', param: 'cpu' },
        { key: 'cpu-cooler', param: 'cpu_cooler' },
        { key: 'video-card', param: 'gpu' }
    ];

    async function fetchWattage(componentKey, componentParam) {
        const component = build[componentKey];
        if (!component) return 0;
        try {
            const response = await fetch(`/api/getWattage?wattageOrTdp=tdp&id=${component.id}&component=${componentParam}`);
            const data = await response.json();
            return data.wattage || 0;
        } catch (error) {
            console.error(`Error while loading ${componentKey} TDP:`, error);
            return 0;
        }
    }

    totalWattage = (await Promise.all(components.map(({ key, param }) => fetchWattage(key, param)))).reduce((acc, watt) => acc + watt, 0);

    if (build['video-card'] && build['power-supply']) {
        try {
            const response = await fetch(`/api/checkIfGpuHasEnoughPower?gpuId=${build['video-card'].id}`);
            const data = await response.json();
            gpuRecommendedPower = data.recommendedPower || 0;
        } catch (error) {
            console.error("Error while loading GPU recommended power:", error);
        }
    }

    if (build['power-supply']) {
        try {
            const response = await fetch(`/api/getWattage?wattageOrTdp=wattage&id=${build['power-supply'].id}&component=power_supply`);
            const data = await response.json();
            powerSupplyPower = data.wattage || 0;
            acceptableWattage = powerSupplyPower + 50;
        } catch (error) {
            console.error("Error while loading power supply wattage:", error);
        }
    }

    console.log("GPU recommended power:", gpuRecommendedPower);
    console.log("Power supply power:", powerSupplyPower);

    const isWattageSufficient = (acceptableWattage >= totalWattage) && (powerSupplyPower >= gpuRecommendedPower);
    estimatedWattageElement.classList.toggle("text-danger", !isWattageSufficient);
    estimatedWattageElement.classList.toggle("text-success", isWattageSufficient);

    estimatedWattageElement.querySelector('span').textContent = `${totalWattage} W`;
}

function observeBuildChanges() {
    document.querySelectorAll('.clear-btn').forEach(button => {
        button.addEventListener("click", async () => {
            console.log("Detected change in selected components in calculateWattage.js");
            await updateWattage();
            console.log("Wattage updated");
        });
    });
}

document.addEventListener("DOMContentLoaded", async function () {
    await updateWattage();
    console.log("Initial wattage updated");
    observeBuildChanges();
});
