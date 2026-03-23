// 1. Detecção de dispositivo
const isMobile = () => window.innerWidth <= 768;

// 2. Central de Configurações (Unindo suas versões)
const getSettings = () => {
    const mobile = isMobile();
    
    return {
        // Dimensões exatas solicitadas
        width: mobile ? 390 : 1920,
        height: mobile ? 844 : 1080,
        
        // Comportamento Adaptativo
        margin: mobile ? 0 : 0.1,      // Zero margem no mobile para ocupar a largura toda
        center: !mobile,               // Não centraliza verticalmente no mobile para não quebrar o scroll
        disableLayout: mobile,         // ESSENCIAL: Libera o conteúdo para fluir
        embedded: mobile,              // Comportamento de conteúdo normal
        touch: !mobile,                // Desativa o swipe do Reveal para liberar o scroll do dedo
        controls: !mobile,             // Remove setas no mobile
        progress: !mobile,             // Remove barra no mobile
        
        // Configurações Fixas e de Escala
        hash: true,
        minScale: 0.2,
        maxScale: 2.0,
        transition: 'slide',
        mouseWheel: false              // Evita conflitos de scroll
    };
};

// 3. Inicialização
Reveal.initialize(getSettings());

// 4. Update em tempo real (Resize)
window.addEventListener('resize', () => {
    Reveal.configure(getSettings());
    Reveal.layout();
});