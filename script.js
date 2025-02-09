//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.querySelector(".close-modal");

    openModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
