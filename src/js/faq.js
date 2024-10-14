import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';
// import iconUp from "../img/icons.svg"
const dowm = '<svg class="faq-icon" width="16" height="9" ><use href="../img/faq-icons.svg#icon-faq-down"></svg>'
const up = '<svg class="faq-icon" width="16" height="9"><use href="../img/faq-icons.svg#icon-faq-up"></svg>'

new Accordion('.accordion-container', {
    openOnInit: [0],
    collapse: false
});
