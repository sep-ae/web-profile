document.addEventListener('DOMContentLoaded', () => {
    const listMenu = document.querySelector(".list-nav");
    const nav = document.querySelector(".nav");

    listMenu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});


window.addEventListener('DOMContentLoaded', (event) => {
    adjustFooterPosition();
});

window.addEventListener('resize', (event) => {
    adjustFooterPosition();
});

function adjustFooterPosition() {
    const body = document.body;
    const footer = document.querySelector('.footer');
    const bodyHeight = body.clientHeight;
    const windowHeight = window.innerHeight;
    const footerHeight = footer.offsetHeight;

    if (bodyHeight < windowHeight) {
        footer.style.marginTop = windowHeight - bodyHeight - footerHeight + 'px';
    } else {
        footer.style.marginTop = 'auto';
    }
}

