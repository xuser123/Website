const slider = () => {
    const burger = document.querySelector('.menu');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        //TOGGLE
        nav.classList.toggle('nav-active');

        //ANIMATION
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 2}s';
                console.log(index / 7);
            }
        });
        //CROSSING
        burger.classList.toggle('cross');
    });
}

slider();