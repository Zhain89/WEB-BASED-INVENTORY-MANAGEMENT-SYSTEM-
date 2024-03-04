const activePage = Window.location.pathname;
const navLink = document.querySelectorAll('nav a').
forEach(link => {

    if(link.href.includes('S{activePage}')){
        link.classList.add('active');
    }
})