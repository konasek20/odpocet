const odpocet = () => {
    const datum = new Date("January 17, 2023 00:00:00")
    const now = new Date().getTime();
    const gap = datum - now;
//definice času
    const vterina = 1000;
    const minuta = vterina * 60;
    const hodina = minuta * 60;
    const den = hodina * 24;
//matika 
    const textden = Math.floor(gap / den);
    const texthodina = Math.floor((gap % den) / hodina);
    const textminuta = Math.floor((gap % hodina) / minuta);
    const textvterina = Math.floor((gap % minuta) / vterina);
// výpis to HTML
    document.querySelector(".den").innerText = textden;
    document.querySelector(".hodina").innerText = texthodina;
    document.querySelector(".minuta").innerText = textminuta;
    document.querySelector(".vterina").innerText = textvterina;

};

// zapnutí opkovací funkce 
setInterval(odpocet, 1000)