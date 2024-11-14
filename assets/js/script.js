var accordionItems = document.getElementsByClassName("accordion-item");

for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", function() {
        // Toggle the "active" class on the clicked item
        this.classList.toggle("active");
    });
}
