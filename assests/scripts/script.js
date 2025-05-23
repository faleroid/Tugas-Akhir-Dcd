document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");
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

const sections = document.querySelectorAll("section, article[id]");
const navLinks = document.querySelectorAll(".navlink");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, {
  threshold: 0.6 // hanya trigger jika 60% section masuk layar
});

sections.forEach(section => observer.observe(section));