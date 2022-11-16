const odpocet = () => {
    const datum = new Date("May 17, 2023 00:00:00").getTime
    const now = new Date().getTime();
    const gap = datum - now;

    const vterina = 1000;
    const minuta = vterina * 60
    const hodina = minuta * 60
    const den = hodina * 24

    const textden = math.floor(gap / den);
    const texthodina = math.floor((gap % den) / hodina);
    const textminuta = math.floor((gap % hodina) / minuta);
    const textvterina = math.floor((gap % minuta) / vterina);

    console.log (now);

    document.querySelector(".container-den").innerText = textden;


};

odpocet();
