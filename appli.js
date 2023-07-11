let tabs = document.querySelectorAll(".tab-link:not(.desactive)");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    unSelectAll();
    tab.classList.add("active");
    let ref = tab.getAttribute("data-ref");
    document
      .querySelector(`.tab-body[data-id="${ref}"]`)
      .classList.add("active");
  });
});

function unSelectAll() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  let tabbodies = document.querySelectorAll(".tab-body");
  tabbodies.forEach((tab) => {
    tab.classList.remove("active");
  });
}

document.querySelector(".tab-link.active").click();



const divcontenaire = document.querySelector('#show');

let show = function(){
    divcontenaire.style.display = 'block';
   
}
const legh = document.querySelector('#show');
let ferme = function(){
  legh.style.display = 'none';
}

let btnback  = document.querySelector('#button');

btnback.addEventListener('click',()=>{
  window.history.back();
})
