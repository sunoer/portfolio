window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgerknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    document.querySelector("#burgersection").classList.toggle("hidden");

    let erSkjult = document.querySelector("#burgersection").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#burgerknap").textContent = "☰";
    } else {
        document.querySelector("#burgerknap").textContent = "✖";
    }
}

/*<!------------------- til top knap start --------------------->*/

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
