const btn = document.getElementById('button');
btn.addEventListener("click", () => {
    btn.textContent = "I have been clicked";
    // btn:hover.style.backgroundColor = "orange"
    setTimeout(() => {
    btn.textContent = "Press me";
    // btn.style.backgroundColor = "transparent"
  }, 1000);
} )
