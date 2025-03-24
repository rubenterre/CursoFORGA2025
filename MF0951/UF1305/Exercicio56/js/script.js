
const modal = document.getElementById("modal");

function abrirModal() { modal.style.display = 'block';}


/* function abrirModal(){
    modal.innerHTML = `<div class="modal-contido">
        <span id="pecharModal" class="pechar">&times;</span>
        <iframe id="iframe" src="https://www.youtube.com/embed/pfJw0zBEyjE?si=cS5VfaXfJvowW2Qd" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`;
    modal.style.display = "block";
} */
/* document.addEventListener('DOMContentLoaded', function abrirModal() {
    
        modal.innerHTML = `<div class="modal-contido">
            <span id="pecharModal" class="pechar">&times;</span>
            <iframe id="iframe" src="https://www.youtube.com/embed/pfJw0zBEyjE?si=cS5VfaXfJvowW2Qd" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> `;
    
}); */
/* function pecharModal() { modal.style.display = 'none';
}; */


/* 
function pecharModal(){
modal.style.display = 'none';
} */

document.addEventListener('DOMContentLoaded', function abrirModal() {
const pecharModalB = document.getElementById("pecharModal");
pecharModalB.addEventListener('click', pecharModal);

});

function pecharModal(){
    modal.innerHTML = ""
}

/* <div class="modal-contido">
        <span id="pecharModal" class="pechar">&times;</span>
        <iframe id="iframe" src="https://www.youtube.com/embed/pfJw0zBEyjE?si=cS5VfaXfJvowW2Qd" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> */