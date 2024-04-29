const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// menu progress
const allItems = document.querySelectorAll(".navmenu ul li a");
allItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    // for (let i = 0; i < allItems.length; i++) {
    //   allItems[i].classList.remove("active");
    // }
    this.classList.add("active");
  });
});

// Sélectionner tous les éléments avec la classe 'navlink'
const navlinks = document.querySelectorAll(".navlink");

// Ajouter un gestionnaire d'événements à chaque élément avec la classe 'navlink'
navlinks.forEach((navlink) => {
  navlink.addEventListener("click", function () {
    // Supprimer la classe 'red-text' de tous les éléments avec la classe 'navlink'
    navlinks.forEach((link) => {
      link.classList.remove("red-text");
    });

    // Ajouter la classe 'red-text' à l'élément cliqué
    this.classList.add("red-text");
  });
});
