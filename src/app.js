/* Função para limpar emails de marketing.
*  Busca os emails da caixa de entreda, verifica o subject e o body do email 
*  procurando por * termos específicos e move para a lixeira.
*/
function detoxGMail() {
  // Obter todas as mensagens da caixa de entrada
  var messages = GmailApp.getInboxThreads();

  // Iterar sobre cada message
  for (var i = 0; i < messages.length; i++) {
    var message = messages[i].getMessages()[0];
    var subject = message.getSubject();
    var body = message.getPlainBody();

    // Verificar se a message contém palavras pré-determinadas
    if (containDeniedWords(subject, body, deniedWords)) {
      // Mover a message para a lixeira
      messages[i].moveToTrash();
    }
  }
}

