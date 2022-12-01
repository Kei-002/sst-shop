$(document).ready(function () {
    // $("#serviceContainer").load(getServices());

    // function getServices() {
    var serviceHtml =
        '<div class="col-lg-4 col-md-6 portfolio-item filter-app">';
    serviceHtml += '<div class="portfolio-wrap imgServ">';
    // serviceHtml += '<img class="img-fluid port" id="servicePhoto"alt="" />';
    serviceHtml += '<div class="portfolio-info" id="portInfo">';
    serviceHtml += '<h4 id="serviceName"></h4>';
    serviceHtml += '<p id="serviceDesc"></p>';
    serviceHtml += "</div>";
    serviceHtml += '<div class="portfolio-links" id="portLink">';
    serviceHtml += "</div>";
    serviceHtml += "</div>";
    serviceHtml += "</div>";
    $(".portfol:first").hide();

    $.ajax({
        type: "GET",
        url: "http://localhost:5000/api/sst/services/",
        dataType: "json",
        success: function (data) {
            console.log(data);
            $.each(data, function (key, value) {
                console.log(key, value);
                var id = value.id;
                var serviceName = value.service_name;
                var serviceDesc = value.description;
                var serviceImg = value.img_path;



                var cont = $("#serviceContainer");
                // var tr = $("<tr>");
                var start = $('<div class="col-lg-4 col-md-6 portfolio-item filter-app">')
                var infoDiv = $('<div class="portfolio-info">');
                var wrapDiv = $('<div class="portfolio-wrap">');
                var linksDiv = $('<div class="portfolio-links">');
                // var insideA = $('<div class="portfolio-links">');

                // start.append($('<div class="portfolio-wrap">'));
                wrapDiv.append($('<img class="img-fluid port" alt=""  />').attr('src', serviceImg))
                // start.append($("<div>").html(value.service_name));
                infoDiv.append($("<h4>").html(serviceName));
                // start.append($('<h4>').html(value.service_name));
                infoDiv.append($('<p>').html(serviceDesc));
                linksDiv.append($('<a href="' + serviceImg + '" data-gallery="portfolioGallery" id="serviceLink" class="portfolio-lightbox" title="' + serviceImg + '"><i class="bi bi-arrows-fullscreen"></i></a>'))
                start.append(wrapDiv)
                infoDiv.appendTo(wrapDiv)
                linksDiv.appendTo(wrapDiv)


                cont.append(start);
            });


        },
        error: function () {
            console.log("AJAX load did not work");
            alert("error");
        },
    });
    // }
});

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header');
        let offset = header.offsetHeight;

        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });
    };

    /**
     * Header fixed top on scroll
     */
    let selectHeader = select('#header');
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;
        const headerFixed = () => {
            if ((headerOffset - window.scrollY) <= 0) {
                selectHeader.classList.add('fixed-top');
                nextElement.classList.add('scrolled-offset');
            } else {
                selectHeader.classList.remove('fixed-top');
                nextElement.classList.remove('scrolled-offset');
            }
        };
        window.addEventListener('load', headerFixed);
        onscroll(document, headerFixed);
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault();

            let navbar = select('#navbar');
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile');
                let navbarToggle = select('.mobile-nav-toggle');
                navbarToggle.classList.toggle('bi-list');
                navbarToggle.classList.toggle('bi-x');
            }
            scrollto(this.hash);
        }
    }, true);

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    AOS.refresh();
                });
            }, true);
        }

    });

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    });

})();
