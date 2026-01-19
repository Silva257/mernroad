
const tst = document.getElementById('test');
const cap = document.getElementById("cp");

tst.addEventListener("click", ()=>{
   
    setTimeout(() => {
      cap.style.backgroundColor = "black"
    }, 1500);
    setTimeout(() => {
      cap.style.backgroundColor = "green"
    }, 2500);
    setTimeout(() => {
      cap.style.backgroundColor = "blue"
    }, 3500);
    setTimeout(() => {
      cap.style.backgroundColor = "grey"
    }, 4500);
    setTimeout(() => {
      cap.style.backgroundColor = "purple"
    }, 5500);
    setTimeout(() => {
      cap.style.backgroundColor = "white"
      cap.style.color = "blue"
    }, 7500);
    tst.style.padding = "0.5rem";
     tst.style.borderRadius = "6px";
    cap.style.color = "red";
})
