const btn = document.getElementById('button');
const defaultValue = btn.textContent;
btn.addEventListener("click", () => {
    btn.textContent = "Annet Silva ";
    setTimeout(() => {
    btn.textContent = defaultValue;
  }, 3000);
} )
