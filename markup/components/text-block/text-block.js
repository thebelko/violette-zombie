var btnTextOpen  = document.querySelector(".js-btn-open");
var textContainer = document.querySelector(".js-text-wrap");

btnTextOpen.addEventListener("click", function() {
    textContainer.classList.add("js-text-wrap--high");
    btnTextOpen.classList.add("js-btn-open--closed");
});
