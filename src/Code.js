/* Função para limpar emails de marketing.
*  Busca os emails da caixa de entreda, verifica o assunto e o corpo do email 
*  procurando por * termos específicos e move para a lixeira.
*/
function verificarEMoverParaLixeira() {
  // Obter todas as mensagens da caixa de entrada
  var mensagens = GmailApp.getInboxThreads();

  // Palavras pré-determinadas a serem verificadas nas mensagens
  const palavrasProibidas = ["off", "oferta", "promoção", 'desconto'];

  // Iterar sobre cada mensagem
  for (var i = 0; i < mensagens.length; i++) {
    var mensagem = mensagens[i].getMessages()[0];
    var assunto = mensagem.getSubject();
    var corpo = mensagem.getPlainBody();

    // Verificar se a mensagem contém palavras pré-determinadas
    if (contemPalavrasProibidas(assunto, corpo, palavrasProibidas)) {
      // Mover a mensagem para a lixeira
      mensagens[i].moveToTrash();
    }
  }
}

// Função auxiliar para verificar se a mensagem contém palavras pré-determinadas
function contemPalavrasProibidas(assunto, corpo, palavrasProibidas) {
  // Converter para minúsculas para garantir correspondência insensível a maiúsculas e minúsculas
  var assuntoMin = assunto.toLowerCase();
  var corpoMin = corpo.toLowerCase();

  // Verificar se o assunto ou o corpo contêm palavras proibidas
  for (var j = 0; j < palavrasProibidas.length; j++) {
    if (assuntoMin.includes(palavrasProibidas[j]) || corpoMin.includes(palavrasProibidas[j])) {
      return true;
    }
  }

  return false;
}
