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

/***********************
 * BASIC FRONTEND SECURITY
 ***********************/
document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
        showSecurityPopup();
    }
});

/***********************
 * SECURITY POPUP
 ***********************/
let popupShown = false;

function showSecurityPopup() {
    if (popupShown) return;
    popupShown = true;

    const popup = document.getElementById("popupMessage");
    const progress = document.getElementById("popupProgress");

    if (!popup || !progress) return;

    // reset
    popup.style.display = "block";
    popup.classList.remove("show");
    progress.style.animation = "none";
    progress.offsetHeight; // force reflow

    // show
    popup.classList.add("show");

    // progress 3 sec
    progress.style.animation = "progressBar 3s linear forwards";

    // auto close
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.style.display = "none";
        }, 500);
    }, 3000);
}

/***********************
 * SHOW POPUP ON PAGE LOAD
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
    showSecurityPopup();
});
