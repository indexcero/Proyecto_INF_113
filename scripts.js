const fathermenu = document.getElementById('fathermenu');
const submenu = document.getElementById('submenu');

function onHoverEnter(){
    console.log("Holiwi");
    submenu.style.display="flex";
}

fathermenu.addEventListener('mouseenter', onHoverEnter);