function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
}window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







