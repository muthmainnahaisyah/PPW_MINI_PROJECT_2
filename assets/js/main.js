// scroll header 
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrolly >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// project 
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

const linkProject = document.querySelectorAll('.project__item')

function activeProject(){
    linkProject.forEach(L=> L.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(L=> L.addEventListener('click', activeProject))


document.addEventListener("DOMContentLoaded", function () {
    const seeMoreButtons = document.querySelectorAll(".project__button");
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.querySelector(".close");

    seeMoreButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const projectTitle = button.previousElementSibling.textContent.trim();
            const projectDescription = getProjectDescription(projectTitle);

            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function getProjectDescription(title) {
        switch (title) {
            case "Photo App":
                return "This is a prototype of a photo application currently in development. The application aims to provide users with the ability to capture, edit, and share photos in an easy and intuitive way.";
            case "Design Photo App":
                return "Design Photo App is a concept project aimed at redesigning the user interface and user experience of existing photo editing applications.";
            case "Wireframe":
                return "This is a wireframe from photo application. Wireframe is a visual guide that represents the skeletal framework of a website or application.";
            case "Design Beauty App":
                return "Design Beauty App is a project focused on creating a user-friendly and visually appealing beauty-related application.";
            default:
                return "Description not available.";
        }
    }
});

// education 
let swiperEducation = new Swiper(".education__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// navigasi
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// animasi
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__social`, {delay: 400})

// form
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const formData = {
            name: name,
            email: email,
            message: message
        };

        localStorage.setItem('formData', JSON.stringify(formData));
        const alertMessage = "FORM BERHASIL DIKIRIMKAN !" + "\n\nName: " + name + "\nEmail: " + email + "\nProject: " + message;
        alert(alertMessage);
        contactForm.reset();
    });
});

// skill
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function(bar) {
        const targetWidth = bar.style.width;
        bar.style.width = '0%'; 
        animateProgressBar(bar, targetWidth);
    });

    function animateProgressBar(bar, targetWidth) {
        let width = 0;
        const animation = setInterval(frame, 10); 

        function frame() {
            if (width >= parseInt(targetWidth)) {
                clearInterval(animation); 
            } else {
                width++;
                bar.style.width = width + '%';
            }
        }
    }
});

// certif
document.addEventListener("DOMContentLoaded", function() {
    const certificates = [
        {
            imgSrc: "assets/img/sertifikat2.jpg",
            title: "Introduction to Figma",
            text: "Getting to know Figma, starting from its functions and advantages to registering for a Figma account."
        },
        {
            imgSrc: "assets/img/sertifikat1.jpg",
            title: "Figma Tools",
            text: "The process of designing with Figma involves understanding the parts of Figma's tools, collaborating in Figma, and the basic principles of Atomic Design and Design Systems."
        },
        {
            imgSrc: "assets/img/sertifikat3.jpg",
            title: "Wireframing for Website",
            text: "Creating the right layout in the website creation process, using grids and frames, as well as utilizing other tools to aid in making wireframes for the website."
        }
    ];

    const certificateRow = document.getElementById("certificateRow");

    certificates.forEach(function(certificate) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = certificate.imgSrc;
        img.alt = "Certificate Image";

        const cardBodyDiv = document.createElement("div");
        cardBodyDiv.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = certificate.title;

        const text = document.createElement("p");
        text.classList.add("card-text");
        text.textContent = certificate.text;

        cardBodyDiv.appendChild(title);
        cardBodyDiv.appendChild(text);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        colDiv.appendChild(cardDiv);

        certificateRow.appendChild(colDiv);
    });
});