const puppeteer = require('puppeteer'); 
var path_browser = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"; // Caminho do seu browser
var url = "https://www.olx.com.br/"; 

var urlt = "https://rj.olx.com.br/serra-angra-dos-reis-e-regiao/computadores-e-acessorios/placa-de-video-rx-580-8gb-1115530761"; 

// INFORMAÇÕES DO PRODUTO (ALTERAR CONFORME A NECESSIDADE)
let product ={
    title: "Pc gamer", 
    description: "Roda tudo dog",
    price: "2600",
}

// INFORMAÇÕES PESSOAIS
var cep = "27259330";     

(async() =>{ 
    const navegador = await puppeteer.launch({
        executablePath: path_browser, 
        userDataDir: 'credenciais', 
        headless: true, // Mude para true caso queira que a aplicação rode em segundo plano
    });
    const pag = await navegador.newPage(); 
    await pag.setViewport({width: 1020, height: 780});
    await pag.goto(urlt);
    var a = 1
    while (a < 1000){
        await pag.reload();
        a ++
    }


    /*
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
    await pag.type('#zipcode', cep, {delay: 20});
    const [fileChooser] = await Promise.all([
        pag.waitForFileChooser(),
        pag.click('#group-image-container > div.ads-forms__image-drag-and-drop > div.image-container__box')
    ]);
    
    await fileChooser.accept(['teste.png']);
    await pag.click('#group-image-container > div.ads-forms__image-drag-and-drop > div.image-container__box');
    await pag.waitForTimeout(1000);
    const pagamento = await pag.waitForXPath('//*[@id="root"]/div[3]/form/div[1]/div/div[2]/div/div[3]/div[1]/label/span/span');
        pagamento.click();
    await pag.waitForTimeout(3000);
    const confirm = await pag.waitForXPath('//*[@id="ad_insertion_submit_button"]');
        confirm.click();

    /*
    await pag.goto('https://conta.olx.com.br/anuncios/publicados');
    await pag.waitForTimeout(2400);
    await pag.screenshot({path: 'anunciado.png', fullPage: true});
    */
}) ();
