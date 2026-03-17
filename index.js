// Pega o botão lá do HTML
const botao = document.getElementById('btn-comecar');

// Adiciona um evento que fica esperando o clique
botao.addEventListener('click', () => {
    
    // 1. Remove a classe que "pausa" tudo (liberando a animação das flores e do texto)
    document.body.classList.remove("not-loaded");
    
    // 2. Adiciona a classe no botão para ele sumir da tela suavemente
    botao.classList.add("esconder-botao");
    
});