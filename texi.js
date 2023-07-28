const puppeteer = require('puppeteer'); 
const url = 'https://boinbet.vip/pc/?code=77628468#/';

(async(num) => {
    const navegador = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", 
        userDataDir: 'credenciais', 
        headless: false, // Mude para true caso queira que a aplicação rode em segundo plano
    });
    const page = await navegador.newPage(); 

    let qnt = 0;
    while(num > qnt){
        await page.goto(url)
        await page.waitForTimeout(2000)
        console.log(qnt)
        qnt++;
    }
}) (200)