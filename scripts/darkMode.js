let ONorOFF_darkMode = false;
let interruptor = document.getElementById('interruptor_darkMode');

interruptor.addEventListener('click', ()=> {
    const root = document.documentElement;
    
    if (!ONorOFF_darkMode) {    
        interruptor.style.left = '60%';
        root.style.setProperty('--cor1', '#ffffff');
        root.style.setProperty('--cor2', '#7d7d7d');
        root.style.setProperty('--cor4', '#181818');
        root.style.setProperty('--cor5', '#000000');
        ONorOFF_darkMode = true;
    }

    else {
        interruptor.style.left = '0';
        root.style.setProperty('--cor1', '#000000');
        root.style.setProperty('--cor2', '#181818');
        root.style.setProperty('--cor4', '#7d7d7d');
        root.style.setProperty('--cor5', '#ffffff');
        ONorOFF_darkMode = false;
    }
});