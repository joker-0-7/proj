let main = document.querySelectorAll("h6")[0];
let para = document.querySelectorAll(".para")[0];
let Main = document.querySelectorAll("h6")[1];
let Para = document.querySelectorAll(".para")[1];
let mAin = document.querySelectorAll("h6")[2];
let pAra = document.querySelectorAll(".para")[2];
let login = document.getElementById( "login" );
let closs = document.getElementById( "close" )
let form = document.getElementById("form")

main.addEventListener("click", (eo) => {
  para.classList.toggle("active");
});
Main.addEventListener("click", (eo) => {
  Para.classList.toggle("active");
});
mAin.addEventListener("click", (eo) => {
  pAra.classList.toggle("active");
} );

closs.addEventListener( "click", (eo) => {
    form.style.display ="none"
})
login.addEventListener( "click", (eo) => {
        form.style.display ="block"

})
