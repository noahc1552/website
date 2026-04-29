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
});

