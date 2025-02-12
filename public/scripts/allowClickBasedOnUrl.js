document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const isBuildPage = path.startsWith("/build");

    document.querySelectorAll(".choose-component").forEach((button) => {
        if (!isBuildPage) {
            button.classList.add("disabled");
            button.style.pointerEvents = "none";
            button.style.display = "none";
        } else {
            button.addEventListener("click", function () {
                const component = this.dataset.component;
                const product = {
                    id: this.dataset.id,
                    brand: this.dataset.brand,
                    model: this.dataset.model
                };

                let build = JSON.parse(localStorage.getItem("pcBuild")) || {};
                build[component] = product;
                localStorage.setItem("pcBuild", JSON.stringify(build));

                window.location.href = "/build";
            });
        }
    });
});