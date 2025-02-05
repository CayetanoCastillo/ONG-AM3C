document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openButton = document.getElementById("floating-button");
    const closeButton = document.getElementById("close-modal");

    openButton.addEventListener("click", function () {
        modal.style.display = "flex";
        positionModal();
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("resize", positionModal);

    function positionModal() {
        const buttonRect = openButton.getBoundingClientRect();
        modal.style.top = `${buttonRect.top - modal.offsetHeight - 10}px`;
        modal.style.left = `${buttonRect.left + buttonRect.width / 2 - modal.offsetWidth / 2}px`;
    }
});
