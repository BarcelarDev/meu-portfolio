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
    center: !isMobile(),           // Não centralizar no mobile (evita bugs de posicionamento)
    disableLayout: isMobile(),     // Muito importante: desativa o layout fixo do Reveal no mobile
    embedded: isMobile(),          // Faz o Reveal se comportar como conteúdo normal da página
    
    // → Aqui está o ajuste principal para scroll com 1 dedo:
    touch: !isMobile(),            // Desativa COMPLETAMENTE o touch/swipe do Reveal no mobile
    
    controls: !isMobile(),
    progress: !isMobile(),
    
    // Outras opções que você já tinha ou pode querer
    // transition: 'slide',        // ou o que você estiver usando
    // ... suas outras configs
});

// Correção dinâmica ao redimensionar a janela
window.addEventListener('resize', () => {
    const currentMobile = isMobile();
    
    Reveal.configure({ 
        disableLayout: currentMobile, 
        center: !currentMobile,
        touch: !currentMobile,          // ← Garante que touch fique false no mobile
        controls: !currentMobile,
        progress: !currentMobile,
        embedded: currentMobile
    });
    
    Reveal.layout();
});