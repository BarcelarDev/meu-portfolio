// Função para verificar se é mobile
const isMobile = () => window.innerWidth <= 768;

// Inicialização do Reveal
Reveal.initialize({
    // Configurações para Desktop
    width: 1200,
    height: 800,
    margin: 0.1,
    minScale: 0.2,
    maxScale: 2.0,
    
    // Configurações de Comportamento
    hash: true,
    center: !isMobile(), // Não centralizar no mobile para não bugar a rolagem
    disableLayout: isMobile(), // Desativa o sistema de coordenadas do Reveal no mobile
    
    // Controles
    controls: !isMobile(),
    progress: !isMobile(),
    touch: true
});

// Correção para o "erro da tela escura" ao redimensionar
window.addEventListener('resize', () => {
    // Se mudarmos de PC para Mobile ou vice-versa via console, recarregamos
    const currentMobile = isMobile();
    if (currentMobile) {
        // No mobile, forçamos o Reveal a "soltar" os slides
        Reveal.configure({ disableLayout: true, center: false });
    } else {
        Reveal.configure({ disableLayout: false, center: true });
    }
    Reveal.layout();
});