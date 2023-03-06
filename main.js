const odpocet = () => {
    const datum = new Date("March 10, 2023 18:00:00"); // zadaní času
    const now = new Date().getTime();
    const gap = datum - now;
  
    // definice času
    const vterina = 1000;
    const minuta = vterina * 60;
    const hodina = minuta * 60;
    const den = hodina * 24;
  
    // matika
    const textden = Math.floor(gap / den);
    const texthodina = Math.floor((gap % den) / hodina);
    const textminuta = Math.floor((gap % hodina) / minuta);
    const textvterina = Math.floor((gap % minuta) / vterina);
  
    // matika pro změnu gramatiky
    let Dní;
  
    if (textden === 4 || textden === 3 || textden === 2) {
      Dní = "Dny";
    } else if (textden === 1) {
      Dní = "Den";
    } else {
      Dní = "Dní";
    }
  
    let Hodin;
  
    if (texthodina === 4 || texthodina === 3 || texthodina === 2) {
        Hodin = "Hodiny";
      } else if (texthodina === 1) {
        Hodin = "Hodina";
      } else {
        Hodin = "Hodin";
      }
      
  
    let Minut;
  
    if (textminuta === 4 || textminuta === 3 || textminuta === 2) {
      Minut = "Minuty";
    } else if (textminuta === 1) {
      Minut = "Minuta";
    } else {
      Minut = "Minut";
    }
  
    let Sekund;
  
    if (textvterina  === 4 || textvterina === 3 || textvterina === 2) {
      Sekund = "Vteřiny";
    } else if (textvterina === 1) {
      Sekund = "Vteřina";
    } else {
      Sekund = "Vteřin";
    }
  
    // výpis to HTML na čas
    document.querySelector(".den").innerText = textden;
    document.querySelector(".hodina").innerText = texthodina;
    document.querySelector(".minuta").innerText = textminuta;
    document.querySelector(".vterina").innerText = textvterina;
  
    // výpis do HTML pro změnu Dní/den atd..
    document.querySelector(".Denos").innerText = Dní;
    document.querySelector(".Hodinos").innerText = Hodin;
    document.querySelector(".Minutos").innerText = Minut;
    document.querySelector(".Vterinos").innerText = Sekund;
  }
  
  // zapnutí opkovací funkce 
setInterval(odpocet, 1000)