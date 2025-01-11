document.querySelector(".menu").addEventListener("click", () => {
    alert("Navigate to a different page!");
});


document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  document.querySelector('nav input').onclick = function() {
    if(this.checked)
      this.setAttribute("aria-expanded",true)
    else
      this.setAttribute("aria-expanded",false)
}
