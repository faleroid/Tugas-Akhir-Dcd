document.addEventListener("DOMContentLoaded", function () {
    let dropdownToggle = document.getElementById("dropdown-toggle");
    let dropdownMenu = document.getElementById("dropdown-menu");
    let dropdownIcon = document.getElementById("dropdown-icon");
    let elements = document.querySelectorAll(".fade-in");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");

        dropdownIcon.textContent = dropdownMenu.classList.contains("show") ? " <" : " >";
    });

    document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("show");
            dropdownIcon.textContent = " >"; 
        }
    });

    dropdownMenu.querySelectorAll("a").forEach(item => {
        item.addEventListener("click", function () {
            dropdownMenu.classList.remove("show");
            dropdownIcon.textContent = " >";
        });
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 }); 

    elements.forEach(element => {
        observer.observe(element);
    });

    var countDownDate = new Date("May 30, 2025 00:00:00").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + ": " +hours + "h " + ": " + minutes  + "m " + ": " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Waktu telah habis!";
        }
    }, 1000);
});

