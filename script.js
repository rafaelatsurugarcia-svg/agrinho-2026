// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Alerta Interativo ao Clicar nos Cards de Pilares
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pilarNome = card.getAttribute('data-pilar');
            alert(`Você selecionou o pilar: ${pilarNome}. Entre em contacto para saber mais sobre as nossas soluções tecnológicas em ${pilarNome.toLowerCase()}!`);
        });
    });

    // 2. Botão de Revelar/Ocultar Estatísticas Ocultas
    const btnSaibaMais = document.getElementById('btnSaibaMais');
    const infoAdicional = document.getElementById('infoAdicional');

    if (btnSaibaMais && infoAdicional) {
        btnSaibaMais.addEventListener('click', () => {
            if (infoAdicional.classList.contains('hidden')) {
                infoAdicional.classList.remove('hidden');
                btnSaibaMais.textContent = 'Ocultar Estatísticas';
            } else {
                infoAdicional.classList.add('hidden');
                btnSaibaMais.textContent = 'Ver Estatísticas de Impacto';
            }
        });
    }

    // 3. Mecanismo de Scroll Suave para o Menu de Navegação
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
