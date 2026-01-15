document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.getElementById('lang-toggle');
  
  if (toggleBtn) {
    // Check local storage for preference
    const currentLang = localStorage.getItem('lang') || 'en';
    if (currentLang === 'cn') {
      document.body.classList.add('cn-mode');
      toggleBtn.innerText = 'English'; // Button shows what you CAN switch to
    } else {
        toggleBtn.innerText = '中文';
    }

    toggleBtn.addEventListener('click', function() {
      if (document.body.classList.contains('cn-mode')) {
        document.body.classList.remove('cn-mode');
        localStorage.setItem('lang', 'en');
        toggleBtn.innerText = '中文';
      } else {
        document.body.classList.add('cn-mode');
        localStorage.setItem('lang', 'cn');
        toggleBtn.innerText = 'English';
      }
    });
  }
});
