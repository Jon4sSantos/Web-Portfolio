let ONorOFF_darkMode = false;
darkMode.addEventListener('click', function darkModeOn() {
    const root = document.documentElement;

    if(!ONorOFF_darkMode) {
    root.style.setProperty('--cor1', '#cfcfcf');
    root.style.setProperty('--cor2', '#7d7d7d');
    root.style.setProperty('--cor4', '#181818');
    root.style.setProperty('--cor5', '#000000');
    ONorOFF_darkMode = true;
    }

    else {
    root.style.setProperty('--cor1', '#000000');
    root.style.setProperty('--cor2', '#181818');
    root.style.setProperty('--cor4', '#7d7d7d');
    root.style.setProperty('--cor5', '#cfcfcf');
    ONorOFF_darkMode = false;
    }
    
})