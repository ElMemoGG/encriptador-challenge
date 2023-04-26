

const text = document.getElementById("text");
const buttonEn = document.getElementById("encriptar"); 
const buttonDes = document.getElementById("desencriptar");

const copiar = document.getElementById("copiar");

const answer = document.getElementById("answer");  
const empty = document.getElementById("empty");

const loading1 = document.getElementById("loading1"); 
const loading2 = document.getElementById("loading2"); 


/* const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}
 */

const handleCopy = (text)=>{

    if(text != "" && text != null){
        navigator.clipboard.writeText(text)
    }
   
  }

const EnctText = (encryptedText)=>{
    /* console.log(text.value) */


    buttonEn.disabled = true;
    loading1.style.display =  "inline-block";


    /* console.log(encryptedText) */
    let upperCaseText = encryptedText.toLowerCase();
    let text = upperCaseText.replace(  /e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    console.log(text)
    
    if(text){
    empty.classList.add("scale-out-center")
    setTimeout(()=>{copiar.classList.remove("hidden"); empty.classList.add("hidden"); answer.classList.remove("hidden"); },500 )

    }
    
 

    answer.value = text
    loading1.style.display =  "none";
    buttonEn.disabled = false;


    
}

const DesText = (encryptedText)=>{

    buttonDes.disabled = true;
    loading2.style.display =  "inline-block";

    /* console.log(text.value) */
    console.log(encryptedText)
    const upperCaseText = encryptedText.toLowerCase();
    let text = upperCaseText.replace(  /enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    console.log(text)

    if(text){
        empty.classList.add("scale-out-center")
        setTimeout(()=>{empty.classList.add("hidden"); answer.classList.remove("hidden")},500 )
        }


    answer.value = text

    loading2.style.display =  "none";
    buttonDes.disabled = false;



    /* return text; */
}


buttonDes.addEventListener("click", ()=>DesText(text.value));
buttonEn.addEventListener("click", ()=>EnctText(text.value));
copiar.addEventListener("click", ()=>handleCopy(answer.value));





