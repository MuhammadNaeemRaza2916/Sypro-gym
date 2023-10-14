// ======================================== Initialize Swiper ========================================
if (window.innerWidth > 576) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        // spaceBetween: '0rem',
        // spaceBetween: 120,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
else if (window.innerWidth <= 576) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        // spaceBetween: '133.9rem',
        // spaceBetween: 133.9,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
// =========================== PLay and Stop video ========================================
const playVideo = () => {
    document.querySelector("#video").style.display = "block";
}
const stopVideo = () => {
    document.querySelector("#video").style.display = "none";
}

const toggleBaar = () => {
    const svgCard = document.querySelector("#svgCard");
    if (svgCard.style.height === '13rem' && window.innerWidth > 992) {
        console.log(svgCard)
        svgCard.style.height = '0rem'
        document.querySelector("#para").style.display = 'none';
        document.querySelector("#showIcon").style.border = 'none';
        document.querySelector("#increaseLine").style.width = '90rem';
    }
    else if (svgCard.style.height === '60.2rem' && window.innerWidth <= 576) {
        console.log(svgCard)
        svgCard.style.height = '0rem'
        document.querySelector("#para").style.display = 'none';
        document.querySelector("#showIcon").style.border = 'none';
        document.querySelector("#increaseLine").style.width = '105rem';
    }
    else if (svgCard.style.height === '0rem' && window.innerWidth <= 576) {
        console.log(svgCard)
        svgCard.style.height = '60.2rem'
        document.querySelector("#para").style.display = 'block';
        document.querySelector("#showIcon").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine").style.width = '108rem';
    }
    else if (svgCard.style.height === '15.2rem' && window.innerWidth <= 992) {
        console.log(svgCard)
        svgCard.style.height = '0rem'
        document.querySelector("#para").style.display = 'none';
        document.querySelector("#showIcon").style.border = 'none';
        document.querySelector("#increaseLine").style.width = '105rem';
    }
    else if (svgCard.style.height === '0rem' && window.innerWidth <= 992) {
        console.log(svgCard)
        svgCard.style.height = '15.2rem'
        document.querySelector("#para").style.display = 'block';
        document.querySelector("#showIcon").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine").style.width = '108rem';
    }
    else {
        console.log("else condition", svgCard)
        svgCard.style.height = '13rem'
        document.querySelector("#para").style.display = 'block';
        document.querySelector("#showIcon").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine").style.width = '100.5rem';
    }
}
const toggleBaar2 = () => {
    const svgCard2 = document.querySelector("#svgCard2");
    if (svgCard2.style.height === '13rem' && window.innerWidth > 992) {
        console.log(svgCard2)
        svgCard2.style.height = '0rem'
        document.querySelector("#para2").style.display = 'none';
        document.querySelector("#showIcon2").style.border = 'none';
        document.querySelector("#increaseLine2").style.width = '90rem';
    }
    else if (svgCard2.style.height === '60.2rem' && window.innerWidth <= 576) {
        console.log(svgCard2)
        svgCard2.style.height = '0rem'
        document.querySelector("#para2").style.display = 'none';
        document.querySelector("#showIcon2").style.border = 'none';
        document.querySelector("#increaseLine2").style.width = '105rem';
    }
    else if (svgCard2.style.height === '0rem' && window.innerWidth <= 576) {
        console.log(svgCard2)
        svgCard2.style.height = '60.2rem'
        document.querySelector("#para2").style.display = 'block';
        document.querySelector("#showIcon2").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine2").style.width = '108rem';
    }
    else if (svgCard2.style.height === '15.2rem' && window.innerWidth <= 992) {
        console.log(svgCard2)
        svgCard2.style.height = '0rem'
        document.querySelector("#para2").style.display = 'none';
        document.querySelector("#showIcon2").style.border = 'none';
        document.querySelector("#increaseLine2").style.width = '105rem';
    }
    else if (svgCard2.style.height === '0rem' && window.innerWidth <= 992) {
        console.log(svgCard2)
        svgCard2.style.height = '15.2rem'
        document.querySelector("#para2").style.display = 'block';
        document.querySelector("#showIcon2").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine2").style.width = '108rem';
    }
    else {
        console.log("else condition", svgCard2)
        svgCard2.style.height = '13rem'
        document.querySelector("#para2").style.display = 'block';
        document.querySelector("#showIcon2").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine2").style.width = '100.5rem';
    }
}
const toggleBaar3 = () => {
    const svgCard3 = document.querySelector("#svgCard3");
    if (svgCard3.style.height === '13rem' && window.innerWidth > 992) {
        console.log(svgCard3)
        svgCard3.style.height = '0rem'
        document.querySelector("#para3").style.display = 'none';
        document.querySelector("#showIcon3").style.border = 'none';
        document.querySelector("#increaseLine3").style.width = '90rem';
    }
    else if (svgCard3.style.height === '60.2rem' && window.innerWidth <= 576) {
        console.log(svgCard3)
        svgCard3.style.height = '0rem'
        document.querySelector("#para3").style.display = 'none';
        document.querySelector("#showIcon3").style.border = 'none';
        document.querySelector("#increaseLine3").style.width = '105rem';
    }
    else if (svgCard3.style.height === '0rem' && window.innerWidth <= 576) {
        console.log(svgCard3)
        svgCard3.style.height = '60.2rem'
        document.querySelector("#para3").style.display = 'block';
        document.querySelector("#showIcon3").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine3").style.width = '108rem';
    }
    else if (svgCard3.style.height === '15.2rem' && window.innerWidth <= 992) {
        console.log(svgCard3)
        svgCard3.style.height = '0rem'
        document.querySelector("#para3").style.display = 'none';
        document.querySelector("#showIcon3").style.border = 'none';
        document.querySelector("#increaseLine3").style.width = '105rem';
    }
    else if (svgCard3.style.height === '0rem' && window.innerWidth <= 992) {
        console.log(svgCard3)
        svgCard3.style.height = '15.2rem'
        document.querySelector("#para3").style.display = 'block';
        document.querySelector("#showIcon3").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine3").style.width = '108rem';
    }
    else {
        console.log("else condition", svgCard3)
        svgCard3.style.height = '13rem'
        document.querySelector("#para3").style.display = 'block';
        document.querySelector("#showIcon3").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine3").style.width = '100.5rem';
    }
}
const toggleBaar4 = () => {
    const svgCard4 = document.querySelector("#svgCard4");
    if (svgCard4.style.height === '13rem' && window.innerWidth > 992) {
        console.log(svgCard4)
        svgCard4.style.height = '0rem'
        document.querySelector("#para4").style.display = 'none';
        document.querySelector("#showIcon4").style.border = 'none';
        document.querySelector("#increaseLine4").style.width = '90rem';
    }
    else if (svgCard4.style.height === '60.2rem' && window.innerWidth <= 576) {
        console.log(svgCard4)
        svgCard4.style.height = '0rem'
        document.querySelector("#para4").style.display = 'none';
        document.querySelector("#showIcon4").style.border = 'none';
        document.querySelector("#increaseLine4").style.width = '105rem';
    }
    else if (svgCard4.style.height === '0rem' && window.innerWidth <= 576) {
        console.log(svgCard4)
        svgCard4.style.height = '60.2rem'
        document.querySelector("#para4").style.display = 'block';
        document.querySelector("#showIcon4").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine4").style.width = '108rem';
    }
    else if (svgCard4.style.height === '15.2rem' && window.innerWidth <= 992) {
        console.log(svgCard4)
        svgCard4.style.height = '0rem'
        document.querySelector("#para4").style.display = 'none';
        document.querySelector("#showIcon4").style.border = 'none';
        document.querySelector("#increaseLine4").style.width = '105rem';
    }
    else if (svgCard4.style.height === '0rem' && window.innerWidth <= 992) {
        console.log(svgCard4)
        svgCard4.style.height = '15.2rem'
        document.querySelector("#para4").style.display = 'block';
        document.querySelector("#showIcon4").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine4").style.width = '108rem';
    }
    else {
        console.log("else condition", svgCard4)
        svgCard4.style.height = '13rem'
        document.querySelector("#para4").style.display = 'block';
        document.querySelector("#showIcon4").style.border = '0.063rem solid #000';
        document.querySelector("#increaseLine4").style.width = '100.5rem';
    }
}
const menuToggle = () => {
    const mainMenu = document.getElementById("mainMenu");
    // console.log(mainMenu);

    if (mainMenu.style.left === "-120rem") {
        mainMenu.style.left = "0"
    }
    else {
        mainMenu.style.left = "-120rem"
    }
}