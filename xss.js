function carregarNovoConteudo(url) {
  document.body.innerHTML = '';

  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.body.innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar novo conteúdo:', error));
}

carregarNovoConteudo('https://atomicnot.github.io/html/index.html');
