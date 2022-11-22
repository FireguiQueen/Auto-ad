const puppeteer = require('puppeteer');

(async() =>{ 
    const navegador = await puppeteer.launch({headless: false});
    const pagina = await navegador.newPage(); 
    await pagina.goto('https://web.whatsapp.com/');
    await pagina.screenshot({path:'image.png'});
}) ();
