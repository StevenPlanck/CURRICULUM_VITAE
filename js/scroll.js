const sections = document.querySelectorAll("section");
let activeSection = 0;

document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        activeSection = Math.min(activeSection + 1, sections.length - 1);
    } else if (event.deltaY < 0) {
        activeSection = Math.max(activeSection - 1, 0);
    }

    window.location = "#" + sections[activeSection].id;
});