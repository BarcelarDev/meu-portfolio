// Função para verificar se é mobile
const isMobile = () => window.innerWidth <= 768;

// Inicialização do Reveal
Reveal.initialize({
    // ... suas outras configs
    width: 1200,
    height: 800,
    
    // ADICIONE ESTA LINHA:
    embedded: isMobile(), 
    
    hash: true,
    center: !isMobile(),
    disableLayout: isMobile(),
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