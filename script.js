document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
});

function toggleContacts() {
    document.querySelector(".contact-section").classList.toggle("active");
}
