// Função auxiliar para verificar se a mensagem contém palavras pré-determinadas
function containDeniedWords(assunto, corpo, deniedWords) {
  // Converter para minúsculas para garantir correspondência insensível a maiúsculas e minúsculas
  var assuntoMin = assunto.toLowerCase();
  var corpoMin = corpo.toLowerCase();

  // Verificar se o assunto ou o corpo contêm palavras proibidas
  for (var j = 0; j < deniedWords.length; j++) {
    if (assuntoMin.includes(deniedWords[j]) || corpoMin.includes(deniedWords[j])) {
      return true;
    }
  }

  return false;
}
