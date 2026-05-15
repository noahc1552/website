document.addEventListener("DOMContentLoaded", () => {
    const typed1 = new Typed("#first-name", {
        strings: ["Noah's"],
        typeSpeed: 100,
        loop: false,
        cursorChar: '',
        onComplete: function() {
    
            document.body.style.overflow = 'hidden';
            const typed2 = new Typed("#last-name", {
                strings: ["Website."],
                typeSpeed: 100,
                loop: false,
                cursorChar: '',
    
                onComplete: function() {
                    document.body.style.overflow = 'auto';
                    document.querySelector('section:nth-of-type(2)').scrollIntoView({
                        behavior: 'smooth', 
                        block: 'start'
                    });
                }
            });
        }
    });

    document.querySelector('#index').addEventListener('click', index_page);

    function index_page() {
        const indexView = document.querySelector('#index-view');
        const linksView = document.querySelector('#links-view');

        const indexVisible = window.getComputedStyle(indexView).display !== 'none';

        if (indexVisible) {
            linksView.style.display = 'block';
            indexView.style.display = 'none';
        } else {
            linksView.style.display = 'none';
            indexView.style.display = 'block';
        }

    }

    let slideIndex = 1;
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    } 
});

