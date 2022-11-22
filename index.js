/* 
---->>    CERTIFIQUE-SE DE RODAR A APLICAÇÃO, FAZER LONGIN EM SUA CONTA E EXECUTÁ-LA NOVAMENTE!  
*/

const puppeteer = require('puppeteer'); 
var path_browser = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"; // Caminho do seu browser
var url = "https://www.olx.com.br/"; 

// INFORMAÇÕES DO PRODUTO (ALTERAR CONFORME A NECESSIDADE)
let product = {
    title: " ", 
    description: " ",
    price: " ",
    image: ['C:\\Users\\FireguiQuines\\Downloads\\teste.png'], // Coloque o caminho da imagem do seu produto
}

// INFORMAÇÕES PESSOAIS
var cep = ' ';     


(async() =>{ 
    const navegador = await puppeteer.launch({
        executablePath: path_browser, 
        headless: false, // Mude para true caso queira que a aplicação rode em segundo plano (sem ver o que ocorre)
        userDataDir: 'credenciais'  
    });
    const pag = await navegador.newPage(); 
    await pag.setViewport({width: 1920, height: 980});
    await pag.goto(url);
    await pag.click('[data-testid="button-wrapper"]');
    const categorias = await pag.waitForXPath('//*[@id="category_item-3000"]');
    categorias.click();
    const computeretc = await pag.waitForXPath('//*[@id="category_item-3040"]');
    computeretc.click();
    await pag.waitForTimeout(1000);
    await pag.type('input[name="subject"]', product.title, {delay: 10});
    await pag.type('[id="body"]', product.description, {delay: 10}); 
    await pag.type('[id="computer_type"]', 'p', {delay: 50}); 
    await pag.type('[id="price"]', product.price); 
    const [fileChooser] = await Promise.all([
    pag.waitForFileChooser(),
    pag.click('#group-image-container > div.ads-forms__image-drag-and-drop > div.image-container__box')
    ]);
    await fileChooser.accept(product.image);
    await pag.click('#group-image-container > div.ads-forms__image-drag-and-drop > div.image-container__box');
    await pag.type('#zipcode', cep, {delay: 20});
    await pag.waitForTimeout(2400);
    const pagamento = await pag.waitForXPath('//*[@id="root"]/div[3]/form/div[1]/div/div[2]/div/div[3]/div[1]/label/span/span');
    pagamento.click();
    await pag.waitForTimeout(3400);
    await pag.click('[id="ad_insertion_submit_button"]');
    await pag.waitForTimeout(10000);
    await pag.goto('https://conta.olx.com.br/anuncios/publicados');
    await pag.waitForTimeout(2400);
    await pag.screenshot({path: 'anunciado.png', fullPage: true});
}) ();
