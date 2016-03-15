//Arquivo para abrir e fechar conteudo da página Usando BDQ no SAE.

function startMenu(div){
    div.style.display = "none";
}

function startMenuAll(div1, div2, div3, div4, div5){
    startMenu(div1);
    startMenu(div2);
    startMenu(div3);
    startMenu(div4);
    startMenu(div5);
}
               
function abreFechaTopico(div){
     if(div.style.display == "none"){
           div.style.display = "block";
     }else{
           startMenu(div);
     } 
}

