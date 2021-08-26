import './css/styles.css';
import { refs } from './js/refs';
import cards from './menu.json';
import menuItemsTpl from './templates/menuItemsTpl.hbs';
// import { Theme } from './js/themeSwitch';
import { onCheckbox } from './js/themeSwitch';


const menuCards = menuItemsTpl(cards);
refs.menuList.insertAdjacentHTML('afterbegin', menuCards);

saveTheme();

refs.themeSwitch.addEventListener('change', onCheckbox);

function saveTheme() {
    const save = localStorage.getItem('Theme');
    if (save) {
        refs.body.classList.add(save);
        if (save === 'dark-theme') {
            refs.themeSwitch.checked = true;
        };
    };
};