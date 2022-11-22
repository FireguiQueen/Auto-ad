const puppeteer = require('puppeteer');
const pptr = require('puppeteer-core');

(async() =>{ 
    const navegador = await pptr.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        headless: false
    });
    const pagina = await navegador.newPage(); 
    await pagina.goto('https://web.whatsapp.com/');
    await pagina.screenshot({path:'image.png'});
}) ();
