let encrypt = document.querySelector("#encrypt");
let decrypt = document.querySelector("#decrypt");
let input = document.querySelector("#text");
let show = document.querySelector("#show");
let showMessage = document.querySelector("#text-2");

const textarea = document.querySelector('#text');
textarea.addEventListener("click", () => {
    textarea.value = "";
});

function encryptText(message) {
    const replacements = {
      'a': 'ai',
      'e': 'enter',
      'i': 'imes',
      'o': 'omes',
      'u': 'ufat'
    };
  
    let encryptedText = "";
    for (let i = 0; i < message.length; i++) {
      const char = message.charAt(i);
      encryptedText += replacements[char] || char;
    }
  
    return encryptedText;
  }
  

function decryptText(message) {
    let decryptedText = message;
  
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/omes/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
  
    return decryptedText;
}    

function showText(text) {
    show.innerHTML = "";
    show.style.display = "block";
    let newText = document.createElement("p");
    newText.textContent = text;
  
    newText.style.fontFamily = 'Inter', 'sans-serif';
    newText.style.fontStyle = 'normal';
    newText.style.fontWeight = '400';
    newText.style.fontSize = '1.35em';
    newText.style.lineHeight = '150%';
    newText.style.color = '#495057';
  
    show.appendChild(newText);
}
  

encrypt.addEventListener("click", () => {
    let encryptedText = encryptText(input.value);
    showText(encryptedText);
});

decrypt.addEventListener("click", () => {
    let decryptedText = decryptText(input.value);
    showText(decryptedText);
});

let copy = document.querySelector("#copy");

copy.addEventListener("click", () => {
    const showTextElement = document.querySelector("#show p");
    const textToCopy = showTextElement.textContent;
  
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
  
    document.body.appendChild(tempTextarea);
  
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  
    document.body.removeChild(tempTextarea);
  });
