document.addEventListener("DOMContentLoaded", () => {
    var typed1 = new Typed("#first-name", {
        strings: ["Noah's"],
        typeSpeed: 100,
        loop: false,
        cursorChar: '',
        onComplete: function() {
    
            document.body.style.overflow = 'hidden';
            var typed2 = new Typed("#last-name", {
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
    document.querySelector('#links').addEventListener('click', links_page);

    function index_page() {
        document.querySelector('#links-view').style.display = 'none';
        document.querySelector('#index-view').style.display = 'block';
    }

    function links_page() {
        document.querySelector('#index-view').style.display = 'none';
        document.querySelector('#links-view').style.display = 'block';
    }
})

