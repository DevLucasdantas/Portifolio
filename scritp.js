document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let isScrolling;

    // Otimização: usa requestAnimationFrame para melhor performance
    function handleScroll() {
        const currentScrollY = window.scrollY;

        // Mostra navbar quando: no topo OU rolando para cima
        if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
            navbar.style.opacity = '1';
            navbar.style.pointerEvents = 'auto';
            navbar.style.transform = 'translateY(0)';
        } 
        // Esconde navbar quando rolando para baixo (exceto no topo)
        else if (currentScrollY > 100) { // Só esconde após 100px de scroll para melhor UX
            navbar.style.opacity = '0';
            navbar.style.pointerEvents = 'none';
            navbar.style.transform = 'translateY(-20px)';
        }

        // Atualiza estado da classe at-top
        document.body.classList.toggle('at-top', currentScrollY <= 0);

        lastScrollY = currentScrollY;
    }

    // Debounce para otimizar performance
    window.addEventListener('scroll', function() {
        window.cancelAnimationFrame(isScrolling);
        isScrolling = window.requestAnimationFrame(handleScroll);
    }, { passive: true });

    // Trata resize para evitar bugs visuais
    window.addEventListener('resize', function() {
        if (window.scrollY <= 0) {
            navbar.style.opacity = '1';
            navbar.style.pointerEvents = 'auto';
        }
    });

    // Adiciona rolagem suave ao clicar nos links da navbar
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Efeito de animação nas tecnologias
    document.querySelectorAll('.tecnologia-card').forEach(tech => {
        tech.addEventListener('mouseenter', () => {
            tech.style.transform = 'scale(1.05)';
            tech.style.transition = 'transform 0.3s ease';
        });
        tech.addEventListener('mouseleave', () => {
            tech.style.transform = 'scale(1)';
        });
    });

    // Feedback visual ao clicar nos botões de projeto
    document.querySelectorAll('.projeto-botao').forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 200);
        });
    });
});


