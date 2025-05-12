window.addEventListener('load', () => {
  // Variáveis de controle
  const bootScreen = document.getElementById('bootScreen');
  const powerBtn = document.getElementById('powerBtn');
  const screen = document.getElementById('screen');
  
  // Remover a tela de carregamento após 2 segundos
  setTimeout(() => {
    bootScreen.style.opacity = '0'; // Fade-out da tela de boot
    setTimeout(() => {
      bootScreen.style.display = 'none'; // Remove da tela
    }, 1000); // Tempo para esperar o fade-out
  }, 2000); // Tempo que a tela de boot fica visível (2 segundos)

  // Lógica para alternar entre ligar e desligar a tela com o botão de power
  powerBtn.addEventListener('click', () => {
    // Verifica se a tela está ligada
    if (screen.classList.contains('ligada')) {
      // Desliga a tela
      screen.classList.remove('ligada');
    } else {
      // Liga a tela
      screen.classList.add('ligada');
    }
  });
});
