const puppeteer = require('puppeteer'); 

// Inf 
const url = "https://www.olx.com.br/"


(async() =>{ 
    const navegador = await puppeteer.launch({
        headless: false,
        userDataDir: 'credenciais'  
    });
    const pagina = await navegador.newPage(); 
    await pagina.goto(URL);
    await pagina.screenshot({path:'image.png'});
}) ();
