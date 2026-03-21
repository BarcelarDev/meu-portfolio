// Função para verificar se é mobile
const isMobile = () => window.innerWidth <= 768;

// Inicialização do Reveal
Reveal.initialize({
    // ... suas configs
    hash: true,
    
    // AJUSTE ESTA LINHA:
    touch: isMobile() ? false : true, 
    
    controls: !isMobile(),
    progress: !isMobile(),
    embedded: isMobile(),
    disableLayout: isMobile()
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