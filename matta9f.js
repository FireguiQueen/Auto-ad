const puppeteer = require('puppeteer'); 
const url = 'https://9f.com/register?redirect=PartnerPage&query=%7B%7D';


(async(howMany) =>{
    const navegador = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe", 
        userDataDir: 'credenciais', 
        headless: false, // Mude para true caso queira que a aplicação rode em segundo plano
    });
    
    const page = await navegador.newPage(); 
    for(let vezes = 0; vezes <= howMany; vezes++){

    const numeros_telefone = [    "24993310000",
    "24997710030",
    "24995510030",
    "24994410030",
    "24992210030",
    "24996610030",
    "24993330030",
    "24997730030",
    "24995530030",
    "24994430030",
    "24992230030",
    "24996630030",
    "24993350030",
    "24997750030",
    "24995550030",
    "24994450030",
    "24992250030",
    "24996650030",
    "24993370030",
    "24997770030",
    "24995570030",
    "24994470030",
    "24992270030",
    "24996670030",
    "24993390030",
    "24997790030",
    "24995590030",
    "24994490030",
    "24992290030",
    "24996690030",
    "24993320030",
    "24997720030",
    "24995520030",
    "24994420030",
    "24992220030",
    "24996620030",
    "24993340030",
    "24997740030",
    "24995540030",
    "24994440030",
    "24992240030",
    "24996640030",
    "24993360030",
    "24997760030",
    "24995560030",
    "24994460030",
    "24992260030",
    "24996660030",
    "24993380030",
    "24997780030",
    "24995580030",
    "24994480030",
    "24992280030",
    "24996680030",
    "24993310030",
    "24997710030",
    "24995510030",
    "24994410030",
    "24992210030",
    "24996610030",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480230",
    "24992280230",
    "24996680230",
    "24993310230",
    "24997710230",
    "24995510230",
    "24994410230",
    "24992210230",
    "24996610230",
    "24993330230",
    "24997730230",
    "24995530230",
    "24994430230",
    "24992230230",
    "24996630230",
    "24993350230",
    "24997750230",
    "24995550230",
    "24994450230",
    "24992250230",
    "24996650230",
    "24993370230",
    "24997770230",
    "24995570230",
    "24994470230",
    "24992270230",
    "24996670230",
    "24993390230",
    "24997790230",
    "24995590230",
    "24994490230",
    "24992290230",
    "24996690230",
    "24993320230",
    "24997720230",
    "24995520230",
    "24994420230",
    "24992220230",
    "24996620230",
    "24993340230",
    "24997740230",
    "24995540230",
    "24994440230",
    "24992240230",
    "24996640230",
    "24993360230",
    "24997760230",
    "24995560230",
    "24994460230",
    "24992260230",
    "24996660230",
    "24993380230",
    "24997780230",
    "24995580230",
    "24994480200",
    "24992280200",
    "24996680200",
    "24993310200",
    "24997710200",
    "24995510200",
    "24994410200",
    "24992210200",
    "24996610200",
    "24993330200",
    "24997730200",
    "24995530200",
    "24994430200",
    "24992230200",
    "24996630200",
    "24993350200",
    "24997750200",
    "24995550200",
    "24994450200",
    "24992250200",
    "24996650200",
    "24993370200",
    "24997770200",
    "24995570200",
    "24994470200",
    "24992270200",
    "24996670200",
    "24993390200",
    "24997790200",
    "24995590200",
    "24994490200",
    "24992290200",
    "24996690200",
    "24993320200",
    "24997720200",
    "24995520200",
    "24994420200",
    "24992220200",
    "24996620200",
    "24993340200",
    ]
        const password = Math.floor(Math.random() * 900000000) + 100000000;
            
        await page.goto(url);   
        await page.waitForTimeout(1000);
        
        await page.keyboard.press("Tab");
        await page.keyboard.sendCharacter(`${numeros_telefone[vezes]}`)
        await page.keyboard.press("Tab");
        await page.keyboard.sendCharacter(`${password}`)
        await page.keyboard.press("Tab");
        await page.keyboard.press("Enter");
        await page.waitForTimeout(6000);
        
        
    }
}) (200);

