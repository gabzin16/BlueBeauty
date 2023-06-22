function toggleAreaExpandida(principalId) {
    // Função que é chamada quando um link principal é clicado para alternar a exibição da área expandida correspondente

    // Obtém o elemento da área expandida com base no ID fornecido
    var area = document.getElementById(principalId + '-area');

    // Obtém o elemento do link principal com base no ID fornecido
    var principal = document.getElementById(principalId);

    // Verifica se a área está oculta ou visível e alterna a propriedade "display" correspondente
    if (area.style.display === 'none') {
        // Se a área estiver oculta, torna-a visível
        area.style.display = 'block';
        // Adiciona a classe 'ativo' ao link principal para destacá-lo visualmente
        principal.classList.add('ativo');
    } else {
        // Se a área estiver visível, oculta-a
        area.style.display = 'none';
        // Remove a classe 'ativo' do link principal para remover o destaque visual
        principal.classList.remove('ativo');
    }
}