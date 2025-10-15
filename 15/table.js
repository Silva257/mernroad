function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);
console.log(cubedNumbers); // [0, 1, 8, 125, 1000]

const tst = document.getElementById('test');
const cap = document.getElementById("cp")
tst.addEventListener("click", ()=>{
    alert("HELLO JAVASCRIPT");  setTimeout(() => {
      cap.style.color = "black"
    }, 1500);
    tst.style.padding = "0.5rem";
     tst.style.borderRadius = "6px";
    cap.style.color = "red";
})
