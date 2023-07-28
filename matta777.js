const puppeteer = require('puppeteer'); 
const url = 'https://bit.ly/mattaTIK777';

(async() =>{
    const navegador = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", 
        userDataDir: 'credenciais', 
        headless: false, // Mude para true caso queira que a aplicação rode em segundo plano
    });
    
    
    function user(indice){
        const names = [
            'Firegui1s',
            'CloneDoF2re',
            'QueenGui3t',
            'Hydroge2',
            'Olvi4Paula',
            'Putas3amadr'
        ];
        return names[indice]; 
    }
    const page = await navegador.newPage(); 
    await page.setViewport({width: 1020, height: 1920});
    await page.goto(url);   
    await page.keyboard.press("Tab");
    await page.waitForTimeout(200);

    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");
    const frames = page.frames();
    const iframeElement = frames.find(frame => frame.name() === 'nome_do_iframe');
    const elemento = await iframeElement.waitForSelector('.input-wrapper');
    await elemento.click();
    await page.waitForTimeout(44400);


}) ();

