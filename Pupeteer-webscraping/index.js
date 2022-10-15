/// [Anotacoes] ///
/// 1. Instale o nodeJS.
/// 2. Instale o Puppeteer: npm i puppeteer
///    Ele serve pra controlar o navegador.
/// 3. Coda, coda, coda e coda
/// 4. Instale o Readline: npm install readline-sync
///    Ele serve para passar parametros via terminal para o puppeteer.

const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Bem vindo ao Bot converdor de $$$");

async function robo() {
  //funcao assincrona para executar o robo
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const moedaBase =
    readlineSync.question("Informe uma moeda base: ") || "dolar";
  const moedaFinal =
    readlineSync.question("Informe uma moeda desejada: ") || "real";
  const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i512l9.2585j1j7&sourceid=chrome&ie=UTF-8`;
  await page.goto(qualquerUrl);
  //   await page.screenshot({ path: "geradorDeMassa.png" });
  const resultado = await page.evaluate(() => {
    return document.querySelector(".lWzCpb.a61j6").value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`);
  await browser.close(); // Fechar o navegador
}

robo();
