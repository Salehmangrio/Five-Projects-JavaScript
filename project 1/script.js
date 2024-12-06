const add = document.getElementById("add");
const remove = document.getElementById("remove")
const statusFrnd = document.querySelector("#card h5")


add.addEventListener("click",()=>{
    statusFrnd.innerHTML="Friend";
    statusFrnd.style.color="green"
})
remove.addEventListener("click",()=>{
    statusFrnd.innerHTML="Stranger";
    statusFrnd.style.color="red"
})