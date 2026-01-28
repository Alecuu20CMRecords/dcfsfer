const slideRows = document.querySelectorAll('.slide-row');
let currentIndex = 0;

function showNextSlides() {
    slideRows.forEach(row => row.style.display = 'none');
    slideRows[currentIndex].style.display = 'flex';

    currentIndex++;
    if (currentIndex >= slideRows.length) {
        currentIndex = 0;
    }
}

showNextSlides();

setInterval(showNextSlides, 8000);

const form = document.getElementById('mcForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('email').value;
    const node = document.getElementById('node').value;
    const serverName = document.getElementById('serverName').value;
    const colors = document.getElementById('colors').value;
    const logo = document.getElementById('logo').value;
    const discord = document.getElementById('discord').value;
    const mcName = document.getElementById('mcName').value;

    const params = {
        email: email,
        node: node,
        serverName: serverName,
        colors: colors,
        logo: logo,
        discord: discord,
        mcName: mcName
    };

    emailjs.send('service_pyph6vw', 'template_3nzqaoo', params, 'O6vEGYohXD5pDr_ph')
        .then(function() {
            successMsg.style.opacity = 1;
            successMsg.textContent = 'Înregistrare trimisă cu succes!';
            form.reset();
            setTimeout(() => { successMsg.style.opacity = 0; }, 4000);
        }, function(error) {
            alert('Eroare la trimitere: ' + JSON.stringify(error));
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popupMessage");
    const closeBtn = document.getElementById("popupClose");
    const progress = document.getElementById("popupProgress");

    setTimeout(() => {
        popup.classList.add("show");

        progress.style.width = "0%";

        setTimeout(() => {
            popup.classList.remove("show");
            popup.classList.add("hide");
        }, 10000);

    }, 2000); 

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popupMessage');

    // Afișează după 0 secunde (instant)
    popup.classList.add('show');

    // Ascunde după 3 secunde
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);

    // Blochează click dreapta pe popup
    popup.addEventListener('contextmenu', e => e.preventDefault());
});
