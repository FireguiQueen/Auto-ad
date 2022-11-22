const puppeteer = require('puppeteer'); 

// Inf 
var url = "https://www.olx.com.br/"; 
var path_browser = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"

(async() =>{ 
    const navegador = await puppeteer.launch({
        executablePath: path_browser, 
        headless: false,
        userDataDir: 'credenciais'  
    });
    const pagina = await navegador.newPage(); 
    await pagina.goto(url);
    

}) ();
