const puppeteer = require('puppeteer');
const credenciais = _dirname + '/.credentials'; 

(async() =>{ 
    const navegador = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
        headless: false
        userDatadir: dir, 
    });
    const pagina = await navegador.newPage(); 
    await pagina.goto('https://web.whatsapp.com/');
    await pagina.screenshot({path:'image.png'});
}) ();
