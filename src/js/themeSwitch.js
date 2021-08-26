import { refs } from "./refs";

export const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


export function onCheckbox (e) {
    if (e.target.checked) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
         
    } else if (!e.target.checked) {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme', Theme.LIGHT);
    };
};