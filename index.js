// Základní validace
// Ověřte, že e-mailová adresa je ve správném tvaru.
// Vytvořte prázdnou stránku, do které vložte knihovnu validator.js a svůj JavaScript index.js.

// Ověřte pomocí metody validator.isEmail platnost vaší e-mailovou adresu.

// Pokud máte po ruce platební kartu, ověřte, že má platné číslo pomocí metody isCreditCard. Případně můžete otestovat kartu 4125010001000208.

// Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživatele.

// <p id="msg" class="msg"></p>
// Napojte do stránky váš vlastní javascriptový soubor index.js.

// Pomocí funkce prompt požádejte uživatele o jeho e-mail. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu „E-mail v pořádku“. V opačném případě zobrazte „Neplatný e-mail“.

// Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu msg--valid. V opačném případě použijte třídu msg--invalid. Přidejte do stránky soubor style.css a třídy nastylujte například tak, že msg--valid bude mít zelené pozadí a msg--invalid naopak červené.

// <!-- index.html -->
// <link rel="stylesheet" href="style.css" />
// /* style.css */
// .msg {
//   color: white;
//   padding: 10px;
// }
// .msg--valid {
//   background-color: green;
// }
// .msg--invalid {
//   background-color: red;
// }
// Stránku postupně otestujte zadáním platné i neplatné adresy.
document.body.innerHTML += `
<p>${validator.isEmail('sarkaa.novakova@seznam.cz')}</p>`;

document.body.innerHTML += `
<p>${validator.isCreditCard(' 4125010001000208')}</p>`;

const email = validator.isEmail(prompt('Zadejte Váš e-mail.'));
const msgElement = document.querySelector('#msg');
if (email === true) {
  msgElement.innerHTML = 'E-mail v pořádku';
  msgElement.classList.add('msg--valid');
} else {
  msgElement.innerHTML = 'Neplatný e-mail';
  msgElement.classList.add('msg--invalid');
}
