const puppeteer = require('puppeteer'); 
const url = 'https://9f.com/register?redirect=PartnerPage&query=%7B%7D';


(async(howMany) =>{
    const navegador = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", 
        userDataDir: 'credenciais', 
        headless: false, // Mude para true caso queira que a aplicação rode em segundo plano
    });

    function numeros_telefone(){
        const sufixo = Math.floor(100000000 + Math.random() * 900000000).toString().substr(1, 8);
        return "149" + sufixo;
    }
    const page = await navegador.newPage(); 
    for(let vezes = 0; vezes <= howMany; vezes++){


          
        const password = Math.floor(Math.random() * 900000000) + 100000000;
            
        await page.goto(url);   
        await page.waitForTimeout(100);
        
        await page.keyboard.press("Tab");
        await page.keyboard.sendCharacter(`${numeros_telefone()}`)
        await page.keyboard.press("Tab");
        await page.keyboard.sendCharacter(`${password}`)
        await page.keyboard.press("Tab");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(400);
    }
}) (300);

