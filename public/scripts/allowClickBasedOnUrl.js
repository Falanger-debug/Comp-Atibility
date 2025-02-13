document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const isBuildPage = path.startsWith("/build");
    let build = JSON.parse(localStorage.getItem("pcBuild")) || {};

    // Highlight selected components
    document.querySelectorAll("tbody tr").forEach((row) => {
        const button = row.querySelector(".choose-component");
        if (!button) return;

        const componentType = button.dataset.component;
        const componentId = button.dataset.id;
        const componentModel = button.dataset.model;

        if (build[componentType] && build[componentType].id === componentId && build[componentType].model === componentModel) {
            row.classList.add("table-warning");
        }
        if (!isBuildPage) {
            row.classList.remove("table-warning");
        }
    });

    let actionTh = document.querySelector(".actionTh");
    if (!isBuildPage && actionTh) {
        actionTh.style.display = "none";
        document.querySelectorAll("tbody tr td:last-child").forEach(td => {
            td.style.display = "none";
        });
    }


    document.querySelectorAll(".choose-component").forEach((button) => {
        if (!isBuildPage) {
            button.classList.add("disabled");
            button.style.pointerEvents = "none";
            button.style.display = "none";
        } else {
            button.addEventListener("click", function () {
                const component = this.dataset.component;
                const product = {
                    id: this.dataset.id, brand: this.dataset.brand, model: this.dataset.model
                };

                let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
                build[component] = product;
                localStorage.setItem("pcBuild", JSON.stringify(build));
                window.location.href = "/build";
            });
        }
    });
});