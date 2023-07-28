const puppeteer = require('puppeteer'); 
const url = 'https://bit.ly/mattaMGM';


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
    const names = [
        'Fireguis',
        'CloneDoFire',
        'QueenGui3t',
        'Hydroge2',
        'Olvi4Paula',
        'Putas3amadr',
        'FireguiQuines'
    ];
    for(let vezes = 0; vezes <= howMany; vezes++){
        await page.goto(url);   
        await page.waitForTimeout(9000);
                await page.keyboard.press("Tab");
                await page.keyboard.press("Enter");

                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");

                await page.keyboard.sendCharacter(`${names[vezes]}`, {delay: 5000}) // user
                await page.keyboard.press("Tab");

                const password = Math.floor(Math.random() * 900) + 100;
                await page.keyboard.sendCharacter(`@2gK${password}` , {delay: 5000}) // password
                await page.keyboard.press("Tab");
                await page.keyboard.sendCharacter(`@2gK${password}` , {delay: 5000}) // password again (confirm)

                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");
                await page.keyboard.sendCharacter(`${numeros_telefone()}` , {delay: 5000}) // password again (confirm)
                await page.keyboard.press("Tab");
                await page.keyboard.press("Tab");
                await page.keyboard.press("Enter");
                await page.waitForTimeout(19000);

    }
}) (300);

