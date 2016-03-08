//Arquivo para abrir e fechar conteudo da página Usando BDQ no SAE.

function startmenu(){
    cadastrarQuestao.style.display = "none";
     pesquisarQuestao.style.display = "none";
     criarLista.style.display = "none";
     pesquisarLista.style.display = "none";
}
                
function abrefechaCadastrarQuestao(){
     if(cadastrarQuestao.style.display == "none"){
           cadastrarQuestao.style.display = "block";
     }else{
           startmenu();
     } 
}

function abrefechaPesquisarQuestao(){
     if(pesquisarQuestao.style.display == "none"){
           pesquisarQuestao.style.display = "block";
     }else{
           startmenu();
     } 
}

function abrefechaCriarLista(){
      if(criarLista.style.display == "none"){
           criarLista.style.display = "block";
      }else{
           startmenu();
      } 
}

function abrefechaPesquisarLista(){
      if(pesquisarLista.style.display == "none"){
           pesquisarLista.style.display = "block";
      }else{
           startmenu();
      } 
}
