document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.hotelSwiper')) {
        const hotelSwiper = new Swiper('.hotelSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    if (document.querySelector('.bunjilakaSwipper')) {
        const bunjilakaSwipper = new Swiper('.bunjilakaSwipper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    if (document.querySelector('.zooSwiper')) {
        const zooSwiper = new Swiper('.zooSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    if (document.querySelector('.parkSwiper')) {
        const parkSwiper = new Swiper('.parkSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    }

    if (document.getElementById('hotel-map')) {
        const map = L.map('hotel-map').setView([-37.8136, 144.9631], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const locations = [
            { name: '200 Spencer Street', lat: -37.8186, lng: 144.9547 },
            { name: '220 Spencer Street', lat: -37.8179, lng: 144.9545 },
            { name: '639 Lonsdale Street', lat: -37.8143, lng: 144.9558 },
            { name: '11 Rose Lane', lat: -37.8166, lng: 144.9570 },
            { name: '33 Rose Lane', lat: -37.8162, lng: 144.9571 },
            { name: '38 Rose Lane', lat: -37.8161, lng: 144.9569 },
            { name: '300 King Street', lat: -37.8135, lng: 144.9553 },
            { name: '538 Little Lonsdale Street', lat: -37.8131, lng: 144.9570 },
            { name: '639 Little Lonsdale Street', lat: -37.8126, lng: 144.9559 },
            { name: '601 Little Collins Street', lat: -37.8187, lng: 144.9530 },
            { name: '620 Collins Street', lat: -37.8182, lng: 144.9568 }
        ];

        locations.forEach(loc => {
            L.marker([loc.lat, loc.lng]).addTo(map)
                .bindPopup(loc.name);
        });
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a school project, contact option is not available.');
            form.reset();
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});