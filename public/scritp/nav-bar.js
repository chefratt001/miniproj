// Get the navbar
var navbar = document.querySelector('.nav-top-bar');
var stickyNavbar = document.querySelector('.nav-top-bar-sticky');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset > sticky) {
        stickyNavbar.style.display = 'block'; // แสดง sticky navbar เมื่อเลื่อน
    } else {
        stickyNavbar.style.display = 'none'; // ซ่อน sticky navbar เมื่ออยู่ด้านบน
    }
}

// When the user scrolls the page, execute stickyNav function
window.onscroll = function() {
    stickyNav();
};