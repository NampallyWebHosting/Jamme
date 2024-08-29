const mainContent = document.querySelector('.main__content');
const scrollContent = document.querySelector('.scroll__content');

const homePage = document.querySelector('.app__home');
const popupBox = document.querySelector('.popup__box');

const faqModal = document.querySelector('.faq__popup');
const eulaModal = document.querySelector('.eula__popup');
const popupModal = document.querySelector('.app__popup');
const termsModal = document.querySelector('.terms__popup');
const privacyModal = document.querySelector('.privacy__popup');
const contactPopupModal = document.querySelector('.contact__popup');

const bgMusic = document.querySelector('#bg__music');
const musicButton = document.querySelector('#music__btn');

const footer = document.querySelector('.main__footer');

// ********************************************************** Toggle Music Option *******************************************

const toggleMusic = () => {
    const musicMode = bgMusic.dataset.mode;
    console.log(musicMode);
    if (musicMode === 'play') {
        bgMusic.play();
        bgMusic.volume = 0.8;
        bgMusic.setAttribute('data-mode', 'pause');
        musicButton.innerHTML = '<img src="assets/Beats.gif" alt="Beats" />'
    }
    if (musicMode === 'pause') {
        bgMusic.setAttribute('data-mode', 'play');
        musicButton.innerHTML = '<img src="assets/Dash.png" alt="Beats" />'
        bgMusic.currentTime = 0;
        bgMusic.pause();
    }
}

// ********************************************************** Toggle Music Option *******************************************

// ********************************************************** Scrolling Blue screen visible *******************************************

window.addEventListener('scroll', function() {

    if (this.document.documentElement.scrollTop >= (this.innerHeight / 2)) {
        mainContent.classList.add('hide__onscroll');
        scrollContent.classList.add('show__onscroll');
        popupBox.style.backgroundColor = "#25A6E8"
        footer.classList.add('show__footer');
    }
    
    else {
        mainContent.classList.remove('hide__onscroll');
        scrollContent.classList.remove('show__onscroll');
        popupBox.style.backgroundColor = "#FFC26F"
        footer.classList.remove('show__footer');
    }
    
})

window.addEventListener('DOMContentLoaded', function() {
    this.document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
    mainContent.classList.remove('hide__onscroll');
    scrollContent.classList.remove('show__onscroll');
});

// ********************************************************** Scrolling Blue screen visible *******************************************

// ********************************************************** Popups *******************************************

const toggleMyPopup = (selector) => {
    document.querySelector(selector).classList.toggle('show__popup');
    document.body.classList.toggle('hidden__body');
}

popupBox.addEventListener('mouseout', () => {
    popupModal.addEventListener('click', () => {
        popupModal.classList.remove('show__popup');
        document.body.classList.remove('hidden__body');
    })
})

// ********************************************************** Popups *******************************************

// ********************************************************** Emailjs Setup *******************************************

// Captcha

// 1. Generate Random String for Captcha

function generateRandomString() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    var randomString = '';
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

// 2. New Captcha Generating each time

function generateCaptcha() {
    var captchaText = generateRandomString();
    document.getElementById('captchaText').textContent = captchaText;
}

generateCaptcha();

// Captcha

const EMAILJS_SERVICE = 'service_5phhwnd';
const EMAILJS_TEMPLATE = 'template_cg5pguh';
const EMAILJS_ACCOUNT = 'B9wKR2K62eySVomP3';

emailjs.init(EMAILJS_ACCOUNT);

const contactForm = document.querySelector('#contact__form');
const submitMsg = document.querySelector('.submit__msg');

const captchaText = document.querySelector('#captchaText');
const capcthaInput = document.querySelector('#captchaInput');

function handleContactForm(e) {

    e.preventDefault();

    if (!(capcthaInput.value === captchaText.textContent)) {
        window.alert('Re-enter Captcha Properly!');
        generateCaptcha();
        return false;
    }

    emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, contactForm).then(() => {
        contactFormSubmitResponse = 'Form Submitted!';
        submitMsg.classList.add('submit__response-success');
        submitMsg.textContent = contactFormSubmitResponse;
    }).catch(() => {
        console.log('Not Done');
        contactFormSubmitResponse = 'Failed!';
        submitMsg.classList.add('submit__response-failed');
        submitMsg.textContent = contactFormSubmitResponse;
    })

    setTimeout(() => {
        window.location.reload();
    }, 4000);
}

// ********************************************************** Emailjs Setup *******************************************

// ********************************************************** Playing with Words - Hero Animation *******************************************

const wordBox1 = document.querySelectorAll('.words')[0];
const wordBox2 = document.querySelectorAll('.words')[1];
const wordBox3 = document.querySelectorAll('.words')[2];
const wordBox4 = document.querySelectorAll('.words')[3];

const frontWordFirstBox = wordBox1.querySelector('.front__word');
const backWordFirstBox = wordBox1.querySelector('.back__word');

const firstBoxFrontWords = ['hello', 'olá'];
const firstBoxBackWords = ['வணக்கம்', 'ciao'];

const frontWordSecondBox = wordBox2.querySelector('.front__word');
const backWordSecondBox = wordBox2.querySelector('.back__word');

const secondBoxFrontWords = ['friend', 'Друг'];
const secondBoxBackWords = ['amigo', '友達'];

const frontWordThirdBox = wordBox3.querySelector('.front__word');
const backWordThirdBox = wordBox3.querySelector('.back__word');

const thirdBoxFrontWords = ['express', '表达'];
const thirdBoxBackWords = ['يعبر', 'äußern'];

const frontWordFourthBox = wordBox4.querySelector('.front__word');
const backWordFourthBox = wordBox4.querySelector('.back__word');

const fourthBoxFrontWords = ['love', 'प्यार'];
const fourthBoxBackWords = ['liebe', '사랑'];

let myAngle = 180;
let currentFrontIndex = 0;
let currentBackIndex = 0;


frontWordFirstBox.textContent = firstBoxFrontWords[currentFrontIndex];
backWordFirstBox.textContent = firstBoxBackWords[currentBackIndex];

frontWordSecondBox.textContent = secondBoxFrontWords[currentFrontIndex];
backWordSecondBox.textContent = secondBoxBackWords[currentBackIndex];

frontWordThirdBox.textContent = thirdBoxFrontWords[currentFrontIndex];
backWordThirdBox.textContent = thirdBoxBackWords[currentBackIndex];

frontWordFourthBox.textContent = fourthBoxFrontWords[currentFrontIndex];
backWordFourthBox.textContent = fourthBoxBackWords[currentBackIndex];


setInterval(() => {

    wordBox1.style.transform = `rotateY(${myAngle}deg)`;
    wordBox2.style.transform = `rotateY(${myAngle}deg)`;
    wordBox3.style.transform = `rotateY(${myAngle}deg)`;
    wordBox4.style.transform = `rotateY(${myAngle}deg)`;

    myAngle = myAngle === 180 ? 0 : 180;

    if (myAngle === 180) {
        currentFrontIndex = currentFrontIndex === 0 ? 1 : 0;
        frontWordFirstBox.textContent = firstBoxFrontWords[currentFrontIndex];
        frontWordSecondBox.textContent = secondBoxFrontWords[currentFrontIndex];
        frontWordThirdBox.textContent = thirdBoxFrontWords[currentFrontIndex];
        frontWordFourthBox.textContent = fourthBoxFrontWords[currentFrontIndex];
    }
    if (myAngle === 0) {
        backWordFirstBox.textContent = firstBoxBackWords[currentFrontIndex];
        backWordSecondBox.textContent = secondBoxBackWords[currentBackIndex];
        backWordThirdBox.textContent = thirdBoxBackWords[currentBackIndex];
        backWordFourthBox.textContent = fourthBoxBackWords[currentBackIndex];
        currentBackIndex = currentBackIndex === 0 ? 1 : 0;
    }

}, 4000);

// ********************************************************** Playing with Words - Hero Animation *******************************************

// ********************************************************** Country Names *******************************************

// <option value="Africa">Africa</option>

let allCountriesList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

const countryDrop = document.querySelector('#countryList');

allCountriesList.forEach((country) => {
    const countryName = document.createElement('option');
    countryName.value = country;
    countryName.textContent = country;
    if (country === 'India') {
        countryName.defaultSelected = true;
    }
    countryDrop.append(countryName);
})

// ********************************************************** Country Names *******************************************

