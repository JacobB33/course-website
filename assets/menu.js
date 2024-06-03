window.addEventListener("DOMContentLoaded", (event) => {
  const pages = document.querySelectorAll('nav.nav-sidebar > ul > li:nth-child(1) > ul > li > a');
  for (let page of pages) {
    page.parentElement.classList.remove("active");
    if (page.href === window.location.href) {
      page.parentElement.classList.add("active");      
    }
  }
});
