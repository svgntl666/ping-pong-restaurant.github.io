//Tutaj też wszystko autorskie

const przystawki = document.querySelector('.przystawki');
const przyst_btn = document.querySelector('.przystawki_przycisk');
const napoje_b = document.querySelector('.napoje_b');
const napoje_f = document.querySelector('.napoje_f');
const desery_f = document.querySelector('.desery_f');
const desery_b = document.querySelector('.desery_b');
const dan_gl_f = document.querySelector('.dania_glowne_f');
const dan_gl_b = document.querySelector('.dania_glowne_b');
const form_kont_b = document.querySelector('.form_kont_b');
const form_kont_f = document.querySelector('.form_kont_f');

przyst_btn.addEventListener('click', () => {
            przystawki.style.display = 'flex';
            przystawki.style.position = 'fixed';
            przystawki.style.justifyContent = 'center';
            przystawki.style.flexDirection = 'row';
            przystawki.style.alignItems = 'center';
})

przystawki.addEventListener('click', () => {
            przystawki.style.display = 'none';
            przystawki.style.position = 'absoulute';
            przystawki.style.justifyContent = 'center';
            przystawki.style.flexDirection = 'row';
            przystawki.style.alignItems = 'center';
})

napoje_b.addEventListener('click', () => {
            napoje_f.style.display = 'flex';
            napoje_f.style.position = 'fixed';
            napoje_f.style.justifyContent = 'center';
            napoje_f.style.flexDirection = 'row';
            napoje_f.style.alignItems = 'center';
})

napoje_f.addEventListener('click', () => {
            napoje_f.style.display = 'none';
            napoje_f.style.position = 'absoulute';
            napoje_f.style.justifyContent = 'center';
            napoje_f.style.flexDirection = 'row';
            napoje_f.style.alignItems = 'center';
})

desery_b.addEventListener('click', () => {
            desery_f.style.display = 'flex';
            desery_f.style.position = 'fixed';
            desery_f.style.justifyContent = 'center';
            desery_f.style.flexDirection = 'row';
            desery_f.style.alignItems = 'center';
})

desery_f.addEventListener('click', () => {
            desery_f.style.display = 'none';
            desery_f.style.position = 'absoulute';
            desery_f.style.justifyContent = 'center';
            desery_f.style.flexDirection = 'row';
            desery_f.style.alignItems = 'center';
})

dan_gl_b.addEventListener('click', () => {
            dan_gl_f.style.display = 'flex';
            dan_gl_f.style.position = 'fixed';
            dan_gl_f.style.justifyContent = 'center';
            dan_gl_f.style.flexDirection = 'row';
            dan_gl_f.style.alignItems = 'center';
})

dan_gl_f.addEventListener('click', () => {
            dan_gl_f.style.display = 'none';
            dan_gl_f.style.position = 'absoulute';
            dan_gl_f.style.justifyContent = 'center';
            dan_gl_f.style.flexDirection = 'row';
            dan_gl_f.style.alignItems = 'center';
})

