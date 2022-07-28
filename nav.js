let closeButton = document.getElementById('sidebar-close'); 
let openButton = document.getElementById('sidebar-open'); 

let sidebarHideClass = "sidenav-hidden";

let sidebar = document.getElementsByClassName('sidenav')[0];

//Assign the function to the button
closeButton.addEventListener('click',closeSideNav);
openButton.addEventListener('click',openSideNav);

function closeSideNav(){
    //add sidebarHideClass to the sidebar
    sidebar.classList.add(sidebarHideClass);
}

function openSideNav(){
    //remove sidebarHideClass to the sidebar
    sidebar.classList.remove(sidebarHideClass);
    
}