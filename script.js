// 1. Redirecionamento Imediato (Se for celular, vai para mobile.html)
if (window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = "mobile.html";
}

// 2. Detecção de dispositivo (Para o caso de redimensionamento de janela no PC)
const isMobile = () => window.innerWidth <= 768;

// 3. Central de Configurações (Focada agora no comportamento de PC/Tablet)
const getSettings = () => {
    const mobile = isMobile();
    
    // Se o usuário redimensionar a tela do PC para o tamanho de um celular, 
    // ele pode escolher se quer redirecionar ou apenas adaptar o layout atual.
    
    return {
        // Dimensões para PC
        width: 1920,
        height: 1080,
        
        // Comportamento para Desktop
        margin: 0.1,
        center: true,
        disableLayout: false,
        embedded: false,
        touch: true,
        controls: true,
        progress: true,
        
        // Configurações Fixas
        hash: true,
        minScale: 0.2,
        maxScale: 2.0,
        transition: 'slide',
        mouseWheel: false
    };
};

// 4. Inicialização do Reveal (Executado apenas se não houver redirecionamento)
Reveal.initialize(getSettings());

// 5. Update em tempo real (Resize)
window.addEventListener('resize', () => {
    // Se no meio do uso o usuário diminuir a tela drasticamente
    if (isMobile()) {
        window.location.href = "mobile.html";
    }
    Reveal.configure(getSettings());
    Reveal.layout();
});