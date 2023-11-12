function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");

    sidebar.classList.toggle("active");
    main.classList.toggle("active");
}