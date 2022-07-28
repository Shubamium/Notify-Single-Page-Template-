let closeButton = document.getElementById('sidebar-close'); 
let openButton = document.getElementById('sidebar-open'); 

let sidebarShowClass = "sidenav-show";

let sidebar = document.getElementsByClassName('sidenav')[0];

//Assign the function to the button
closeButton.addEventListener('click',closeSideNav);
openButton.addEventListener('click',openSideNav);

function closeSideNav(){
    sidebar.classList.remove(sidebarShowClass);
}

function openSideNav(){
    sidebar.classList.add(sidebarShowClass);
    
}